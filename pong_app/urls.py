from django.urls import path
from . import views

urlpatterns = [
    path('move/', views.move, name='move'),
]