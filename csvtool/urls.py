from django.contrib import admin
from django.conf.urls import url, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'spreadsheets', views.SpreadsheetViewSet, 'Spreadsheets')

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls))
]
