from django.db import models
import django.utils
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

# class Calendar(models.Model):
#     timezone = models.CharField(max_length=3)
#     owner = models.ForeignKey(Profile, on_delete=models.CASCADE)
#     header = models.CharField(max_length=80)
#     description = models.TextField(null=True, blank=True)
#
#     def __str__(self):
#         return self.header

class Trip(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Photo(models.Model):
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE)
    image = models.ImageField(blank=False, null=False, upload_to='photos/')
