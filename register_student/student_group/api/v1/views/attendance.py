###
# Libs
###
from rest_framework import viewsets
from ..serializers import AttendanceSerializer
from student_group.models.attendance import Attendance


###
# Viewsets
###
class AttendanceViewSet(viewsets.ModelViewSet):

    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer
