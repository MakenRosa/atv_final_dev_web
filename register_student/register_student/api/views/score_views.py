from register_student.models import Score, Student
from rest_framework import viewsets, permissions
from ..serializers.score_serializers import ScoreSerializer
from django_filters import rest_framework as filters
from ..filters import ScoreFilter
from rest_framework.response import Response


class ScoreViewSet(viewsets.ModelViewSet):
    queryset = Score.objects.all()
    permission_classes = [permissions.AllowAny,]
    serializer_class = ScoreSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ScoreFilter


class ScoreViewSet(viewsets.ModelViewSet):
    queryset = Score.objects.all()
    permission_classes = [permissions.AllowAny,]
    serializer_class = ScoreSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ScoreFilter

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)

        data = {}
        for item in serializer.data:
            student_id = item['student']
            if student_id not in data:
                student = Student.objects.get(id=student_id)
                data[student_id] = {
                    'student': student.id,
                    'registration': student.registration,
                    'name': student.name,
                    'scores': []
                }
            data[student_id]['scores'].append(
                {'date': item['date'], 'score': item['score']})

        return Response(list(data.values()))
