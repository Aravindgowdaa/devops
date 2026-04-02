from django.urls import path

from .views import echo_message, health

urlpatterns = [
    path("health/", health, name="health"),
    path("echo/", echo_message, name="echo"),
]
