from register_student.models import Score
from rest_framework import viewsets, permissions

from ..serializers.score_serializers import ScoreSerializer


class ScoreViewSet(viewsets.ModelViewSet):
    queryset = Score.objects.all()
    permission_classes = [permissions.AllowAny,]
    serializer_class = ScoreSerializer
