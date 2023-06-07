from django.urls import path, include
from rest_framework import routers
from .views.school_class_views import SchoolClassViewSet
from .views.school_subjects_views import SchoolSubjectsViewSet
from .views.score_views import ScoreViewSet
from .views.student_views import StudentViewSet
from .views.attendance_views import AttendanceViewSet
from .views.address_views import AddressViewSet


router = routers.SimpleRouter()
router.register(
    r'school_class',
    SchoolClassViewSet,
    basename='SchoolClass'
)
router.register(
    r'school_subjects',
    SchoolSubjectsViewSet,
    basename='SchoolSubjects'
)
router.register(
    r'score',
    ScoreViewSet,
    basename='Score'
)
router.register(
    r'student',
    StudentViewSet,
    basename='Student'
)
router.register(
    r'attendance',
    AttendanceViewSet,
    basename='Attendance'
)
router.register(
    r'address',
    AddressViewSet,
    basename='Address'
)


urlpatterns = [
    path('api/', include(router.urls)),
]
