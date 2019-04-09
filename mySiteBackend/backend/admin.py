# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from backend.models import Trip, Photo
from django.contrib import admin

class TripAdmin(admin.ModelAdmin):
    list_display = ('name', 'pk')

class PhotoAdmin(admin.ModelAdmin):
    list_display = ('title', 'trip', 'image', 'pk')
    list_filter = ('trip',)

admin.site.register(Trip, TripAdmin)
admin.site.register(Photo, PhotoAdmin)
