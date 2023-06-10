###
# Libs
###
from rest_framework import viewsets
from student_group.models.score import Score
from ..serializers import ScoreSerializer


###
# Viewsets
###
class ScoreViewSet(viewsets.ModelViewSet):

    queryset = Score.objects.all()
    serializer_class = ScoreSerializer
