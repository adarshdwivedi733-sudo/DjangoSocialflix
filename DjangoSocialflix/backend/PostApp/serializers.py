from rest_framework.serializers import ModelSerializer
from PostApp.models import Post

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

