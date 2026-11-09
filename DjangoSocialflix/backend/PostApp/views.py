from rest_framework.decorators import api_view
from rest_framework.response import Response
from PostApp.models import Post
from PostApp.serializers import PostSerializer


@api_view(['GET'])
def getAllPosts(request):    
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getPost(request, id):
    post = Post.objects.get(id=id)
    serializer = PostSerializer(post, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def createPost(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['PUT'])
def updatePost(request, id):
    post = Post.objects.get(id=id)
    serializer = PostSerializer(instance=post, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def deletePost(request, id):
    post = Post.objects.get(id=id)
    post.delete()
    return Response("Post was deleted")
