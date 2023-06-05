from register_student.models import Attendance
from rest_framework import viewsets, permissions

from ..serializers.attendance_serializers import AttendanceSerializer


class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    permission_classes = [permissions.AllowAny,]
    serializer_class = AttendanceSerializer
