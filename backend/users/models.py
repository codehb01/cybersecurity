from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    email = models.EmailField(max_length = 200, unique = True)
    birthday = models.DateField(null = True, blank = True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []