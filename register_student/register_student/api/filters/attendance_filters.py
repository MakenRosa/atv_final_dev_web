from django_filters import rest_framework as filters
from register_student.models import Attendance


class AttendanceFilter(filters.FilterSet):
    class_id = filters.CharFilter(method='filter_class')

    def filter_class(self, queyset, name, value):
        return queyset.filter(school_classes__id=value)

    class Meta:
        model = Attendance
        fields = "__all__"
