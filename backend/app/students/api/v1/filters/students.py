###
# Libs
###
from django_filters import rest_framework as filters
from app.students.models.student import Student
from django.db.models import Q

###
# Filters
###
class StudentFilter(filters.FilterSet):
    class_id = filters.CharFilter(method='filter_class')
    name = filters.CharFilter(method='filter_name')
    registration = filters.CharFilter(method='filter_registration')

    def filter_class(self, queyset, name, value):
        return queyset.filter(group__id=value)

    def filter_name(self, queryset, name, value):
        return queryset.filter(Q(full_name__icontains=value))

    def filter_registration(self, queyset, name, value):
        return queyset.filter(id=value)

    class Meta:
        model = Student
        fields = "__all__"
