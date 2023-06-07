from register_student.models import SchoolClass
from rest_framework import viewsets, permissions

from ..serializers.school_class_serializers import SchoolClassSerializer
from django_filters import rest_framework as filters
from ..filters import SchoolClassFilter


class SchoolClassViewSet(viewsets.ModelViewSet):
    queryset = SchoolClass.objects.all()
    permission_classes = [permissions.AllowAny,]
    serializer_class = SchoolClassSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = SchoolClassFilter
