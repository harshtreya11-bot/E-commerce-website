# orders/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status
from .models import Order, OrderItem
from .serializers import OrderSerializer
from cart.views import get_or_create_cart

REQUIRED_ORDER_FIELDS = ['full_name', 'email', 'address', 'city', 'state', 'pincode', 'phone']


class CreateOrderView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        # Validate required fields
        missing = [f for f in REQUIRED_ORDER_FIELDS if not request.data.get(f)]
        if missing:
            return Response(
                {'error': f'Missing required fields: {", ".join(missing)}'},
                status=status.HTTP_400_BAD_REQUEST
            )

        cart = get_or_create_cart(request)
        items = cart.items.select_related('product').all()

        if not items.exists():
            return Response(
                {'error': 'Cannot create an order with an empty cart.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        total = sum(i.product.price * i.quantity for i in items)

        order = Order.objects.create(
            user=request.user if request.user.is_authenticated else None,
            full_name=request.data['full_name'],
            email=request.data['email'],
            address=request.data['address'],
            city=request.data['city'],
            state=request.data['state'],
            pincode=request.data['pincode'],
            phone=request.data['phone'],
            total_amount=total,
        )
        for item in items:
            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price=item.product.price,
            )
        cart.items.all().delete()  # clear cart after order

        serializer = OrderSerializer(order)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class PayOrderView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, order_id):
        try:
            order = Order.objects.get(id=order_id)
        except Order.DoesNotExist:
            return Response(
                {'error': f'Order with id {order_id} not found.'},
                status=status.HTTP_404_NOT_FOUND
            )

        if order.payment_status == 'paid':
            return Response(
                {'error': 'This order has already been paid.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        order.payment_status = 'paid'
        order.order_status = 'paid'
        order.save()
        return Response({'status': 'paid', 'message': 'Payment successful'})


class OrderDetailView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, order_id):
        try:
            order = Order.objects.get(id=order_id)
        except Order.DoesNotExist:
            return Response(
                {'error': f'Order with id {order_id} not found.'},
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = OrderSerializer(order)
        return Response(serializer.data)