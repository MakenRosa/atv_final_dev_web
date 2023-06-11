###
# Libs
###
from rest_framework import viewsets
from ..serializers import StudentGroupSerializer
from student_group.models.student_group import StudentGroup


###
# Viewsets
###
class StudentGroupViewSet(viewsets.ModelViewSet):

    queryset = StudentGroup.objects.all()
    serializer_class = StudentGroupSerializer
