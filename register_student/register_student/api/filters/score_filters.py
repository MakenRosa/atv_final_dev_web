from django_filters import rest_framework as filters
from register_student.models import Score

class ScoreFilter(filters.FilterSet):
    class_id = filters.CharFilter(method='filter_class')

    def filter_class(self, queryset, name, value):
        return queryset.filter(student__school_classes__id=value)

    class Meta:
        model = Score
        fields = "__all__"
