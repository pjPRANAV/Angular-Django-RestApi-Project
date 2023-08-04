from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class carserilizer(serializers.ModelSerializer):
    class Meta:
        model=cars
        fields='__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user