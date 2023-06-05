from register_student.models import Student
from rest_framework import viewsets, permissions

from ..serializers.student_serializers import StudentSerializer


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    permission_classes = [permissions.AllowAny,]
    serializer_class = StudentSerializer
