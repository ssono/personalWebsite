from rest_framework import serializers
from .models import Trip, Photo

class PhotoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Photo
        fields = "__all__"

class TripSerializer(serializers.HyperlinkedModelSerializer):
    photos = PhotoSerializer(
        many=True,
        read_only=True,
        # view_name='photo-detail'
    )

    class Meta:
        model = Trip
        fields = ('id', 'url','name', 'photos')
