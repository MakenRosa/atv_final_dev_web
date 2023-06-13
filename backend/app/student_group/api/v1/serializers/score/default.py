###
# Libraries
###
from rest_framework import serializers
from app.student_group.models.score import Score

###
# Serializers
###


class ScoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Score
        fields = ('id', 'score', 'date', 'student_group')
