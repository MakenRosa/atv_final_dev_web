###
# Libs
###
from rest_framework import viewsets, permissions

from ..serializers.students.default import DefaultStudentSerializer
from ..serializers.students.retrieve import RetrieveStudentSerializer
from ..serializers.students.create import CreateStudentSerializer
from app.students.models.student import Student
from ..filters.students import StudentFilter
from django_filters import rest_framework as filters


###
# Viewsets
###
class StudentsViewSet(
    viewsets.ModelViewSet
):

    queryset = Student.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = StudentFilter

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return RetrieveStudentSerializer
        elif self.action in ['update', 'create', 'partial_update']:
            return CreateStudentSerializer
        else:
            return DefaultStudentSerializer
