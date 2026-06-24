# orders/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.CreateOrderView.as_view()),
    path('<int:order_id>/pay/', views.PayOrderView.as_view()),
    path('<int:order_id>/', views.OrderDetailView.as_view()),
]