from django.urls import path

from .views import metabase_embed_url

urlpatterns = [
    path('iframe_url/', metabase_embed_url),
]