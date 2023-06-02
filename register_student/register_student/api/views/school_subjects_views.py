from register_student.models import SchoolSubjects
from rest_framework import viewsets, permissions

from ..serializers.school_subjects_serializers import SchoolSubjectsSerializer


class SchoolSubjectsViewSet(viewsets.ModelViewSet):
    queryset = SchoolSubjects.objects.all()
    permission_classes = [permissions.AllowAny,]
    serializer_class = SchoolSubjectsSerializer
