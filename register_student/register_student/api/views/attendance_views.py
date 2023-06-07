from register_student.models import Attendance
from rest_framework import viewsets, permissions

from ..serializers.attendance_serializers import AttendanceSerializer
from django_filters import rest_framework as filters

from ..filters import AttendanceFilter


class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    permission_classes = [permissions.AllowAny,]
    serializer_class = AttendanceSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = AttendanceFilter
