# cart/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status
from .models import Cart, CartItem
from .serializers import CartSerializer
from product.models import Product


def get_or_create_cart(request):
    if request.user.is_authenticated:
        cart, _ = Cart.objects.get_or_create(user=request.user)
    else:
        if not request.session.session_key:
            request.session.create()
        cart, _ = Cart.objects.get_or_create(session_key=request.session.session_key)
    return cart


class CartView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        cart = get_or_create_cart(request)
        serializer = CartSerializer(cart)
        return Response(serializer.data)


class AddToCartView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        cart = get_or_create_cart(request)
        product_id = request.data.get('product_id')
        quantity = request.data.get('quantity', 1)

        if not product_id:
            return Response(
                {'error': 'product_id is required.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            quantity = int(quantity)
            if quantity < 1:
                raise ValueError
        except (ValueError, TypeError):
            return Response(
                {'error': 'quantity must be a positive integer.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return Response(
                {'error': f'Product with id {product_id} not found.'},
                status=status.HTTP_404_NOT_FOUND
            )

        item, created = CartItem.objects.get_or_create(cart=cart, product=product)
        if not created:
            item.quantity += quantity
        else:
            item.quantity = quantity
        item.save()
        return Response({'message': 'Added to cart', 'item_id': item.id}, status=status.HTTP_201_CREATED)


class UpdateCartItemView(APIView):
    permission_classes = [AllowAny]

    def patch(self, request, item_id):
        try:
            item = CartItem.objects.get(id=item_id)
        except CartItem.DoesNotExist:
            return Response(
                {'error': f'Cart item with id {item_id} not found.'},
                status=status.HTTP_404_NOT_FOUND
            )

        quantity = request.data.get('quantity')
        if quantity is not None:
            try:
                quantity = int(quantity)
                if quantity < 1:
                    raise ValueError
            except (ValueError, TypeError):
                return Response(
                    {'error': 'quantity must be a positive integer.'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            item.quantity = quantity
        item.save()
        return Response({'message': 'Updated'})


class RemoveCartItemView(APIView):
    permission_classes = [AllowAny]

    def delete(self, request, item_id):
        deleted_count, _ = CartItem.objects.filter(id=item_id).delete()
        if deleted_count == 0:
            return Response(
                {'error': f'Cart item with id {item_id} not found.'},
                status=status.HTTP_404_NOT_FOUND
            )
        return Response({'message': 'Removed'})


class CartCountView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        cart = get_or_create_cart(request)
        return Response({'count': cart.items.count()})