from django_filters import rest_framework as filters
from register_student.models import SchoolClass

class SchoolClassFilter(filters.FilterSet):
    name = filters.CharFilter(method='filter_name')

    def filter_name(self, queryset, name, value):
        return queryset.filter(school_subjects__name=value)

    class Meta:
        model = SchoolClass
        fields = "__all__"
