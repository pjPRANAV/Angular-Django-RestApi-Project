from django.urls import path
from .views import *

urlpatterns = [
    path('cars/', carListCreateAPIView.as_view(), name='car-list-create'),
    path('car/<int:pk>/', carRetrieveUpdateDeleteAPIView.as_view(), name='car-detail'),
    path('register/', UserRegistrationAPIView.as_view(), name='user-register'),
    path('login/', UserLoginAPIView.as_view(), name='user-login'),
    path('logout/', UserLogoutAPIView.as_view(), name='user-logout'),
]
