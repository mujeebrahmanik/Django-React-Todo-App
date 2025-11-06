from rest_framework import serializers
from .models import *

class Category_serializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=['title','user','id']
        read_only_fields=['user']
        
        
class Task_serializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    category_name = serializers.CharField(source='category.title', read_only=True)
    class Meta:
        model = Task
        fields = ['id','title','description','category','priority','created_at','user','completed','category_name']
        read_only_fields=['user']

    
        
class User_serializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    class Meta:
        model=User
        fields=['username','email','password']
        
    def create(self, validated_data):
        return User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )