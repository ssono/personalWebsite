from rest_framework import serializers
from .models import Trip, Photo

class TripSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Trip
        fields = "__all__"

class PhotoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Photo
        fields = "__all__"
