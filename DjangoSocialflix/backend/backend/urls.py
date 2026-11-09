from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/post/', include('PostApp.urls')),
    path('admin/', admin.site.urls),
]
