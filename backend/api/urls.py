from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView



urlpatterns = [
    path('category/', Category_view.as_view(),name='category'),
    path('category/<int:pk>/', Category_detail_view.as_view(),name='category_detail'),
    path('task/', Task_view.as_view(),name='task'),
    path('task/<int:pk>/', Task_detail_view.as_view(),name='task_detail'),
    path('register/', Register_view.as_view(),name='register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    

]