"""
API V1: StudentGroup Urls
"""
###
# Libraries
###
from django.urls import path, include
from rest_framework import routers

from .views.score import ScoreViewSet
from .views.attendance import AttendanceViewSet
from .views.student_group import StudentGroupViewSet


###
# Routers
###
""" Main router """
router = routers.SimpleRouter()
router.register(
    r'score',
    ScoreViewSet,
    basename='score'
)
router.register(
    r'student_group',
    StudentGroupViewSet,
    basename='student_group'
)
router.register(
    r'attendance',
    AttendanceViewSet,
    basename='attendance'
)

###
# URLs
###
urlpatterns = [
    path('', include(router.urls)),
]
