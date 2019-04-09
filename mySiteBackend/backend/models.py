from django.db import models
import django.utils
from django.db.models.signals import post_save
from django.dispatch import receiver


class Trip(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Photo(models.Model):
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name='photos')
    image = models.ImageField(blank=False, null=False, upload_to='photos/')
    title = models.CharField(max_length=50,null=True, blank=True)

    def __str__(self):
        return self.title
