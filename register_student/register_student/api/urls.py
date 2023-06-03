from django.urls import path, include
from rest_framework import routers
from .views.school_class_views import SchoolClassViewSet
from .views.school_subjects_views import SchoolSubjectsViewSet


router = routers.SimpleRouter()
router.register(r'school_class', SchoolClassViewSet, basename='SchoolClass')
router.register(r'school_subjects', SchoolSubjectsViewSet,
                basename='SchoolSubjects')


urlpatterns = [
    path('api/', include(router.urls)),
]
