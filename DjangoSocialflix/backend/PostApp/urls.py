from django.urls import path
from . import views

urlpatterns = [
    path('', views.getAllPosts),
    path('<int:id>/', views.getPost),
    path('create/', views.createPost),
    path('update/<int:id>/', views.updatePost),
    path('delete/<int:id>/', views.deletePost),
]

