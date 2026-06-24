# cart/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.CartView.as_view()),
    path('add/', views.AddToCartView.as_view()),
    path('update/<int:item_id>/', views.UpdateCartItemView.as_view()),
    path('remove/<int:item_id>/', views.RemoveCartItemView.as_view()),
    path('count/', views.CartCountView.as_view()),
]