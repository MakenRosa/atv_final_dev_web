"""
API V1: Students Urls
"""
###
# Libraries
###
from django.urls import path, include
from .views.students import StudentsViewSet
from rest_framework import routers


###
# Routers
###
""" Main router """
router = routers.SimpleRouter()
router.register(r'students', StudentsViewSet, basename='students')

###
# URLs
###
urlpatterns = [
    path('', include(router.urls)),
]
