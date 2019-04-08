from django.urls import path, include
from . import views
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register('trip', views.TripView)
router.register('photo', views.PhotoView)
# router.register('invite', views.InviteView)
# router.register('calendar', views.CalendarView)
# router.register('task', views.TaskView)
# router.register('user', views.UserView)

urlpatterns = [
    path('', include(router.urls)),
]

if settings.DEBUG:
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
