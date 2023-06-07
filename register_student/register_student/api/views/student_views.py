from register_student.models import Student
from rest_framework import viewsets, permissions

from ..serializers.student_serializers import StudentSerializer
from django_filters import rest_framework as filters
from ..filters import StudentFilter


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    permission_classes = [permissions.AllowAny,]
    serializer_class = StudentSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = StudentFilter
    
