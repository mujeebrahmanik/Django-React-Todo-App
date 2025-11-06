from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Category(models.Model):
    title=models.CharField(max_length=100)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title
    
    
class Task(models.Model):
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    title=models.CharField(max_length=100)
    description=models.TextField(null=True, blank=True)
    completed=models.BooleanField(default=False)
    priority = models.CharField(
        max_length=10,
        choices=[("low", "Low"), ("medium", "Medium"), ("high", "High")],
        default="medium"
    )
    created_at=models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    