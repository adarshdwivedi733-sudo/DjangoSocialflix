from django.db import models

# Create your models here.
class Post(models.Model):
    poster = models.CharField(max_length=500)
    caption = models.TextField()