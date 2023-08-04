from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.shortcuts import render
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt
from .models import *
from .serializer import *
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

# Create your views here.
class carListCreateAPIView(APIView):
    def get(self, request, format=None):
        car = cars.objects.all()
        serializer = carserilizer(car, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = carserilizer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class carRetrieveUpdateDeleteAPIView(APIView):

    def get_object(self, pk):
        try:
            return cars.objects.get(pk=pk)
        except cars.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def get(self, request, pk, format=None):
        car = self.get_object(pk)
        serializer = carserilizer(car)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        car = self.get_object(pk)
        serializer = carserilizer(car,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk, format=None):
        books = self.get_object(pk)
        books.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class UserRegistrationAPIView(APIView):
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginAPIView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
            username = request.data.get('username')
            password = request.data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                serializer = UserSerializer(user)
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class UserLogoutAPIView(APIView):
    def post(self, request):
        logout(request)
        return Response({'message': 'Successfully logged out'})
