from django.shortcuts import render
from rest_framework import generics,permissions
from .models import *
from .serializers import *

# Create your views here.
class Category_view(generics.ListCreateAPIView):
    serializer_class=Category_serializer
    permission_classes=[permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Category.objects.filter(user=self.request.user).order_by('-id')
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        
class Category_detail_view(generics.RetrieveUpdateDestroyAPIView):
    queryset=Category.objects.all()
    serializer_class=Category_serializer
    permission_classes=[permissions.IsAuthenticated]
    lookup_field='pk'

    
    
class Task_view(generics.ListCreateAPIView):
    serializer_class=Task_serializer
    permission_classes=[permissions.IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        
    def get_queryset(self):
        return Task.objects.filter(user=self.request.user).order_by('-id')

    
    
class Task_detail_view(generics.RetrieveUpdateDestroyAPIView):
    queryset=Task.objects.all()
    serializer_class=Task_serializer
    lookup_field='pk'
    
class Register_view(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=User_serializer


