###
# Libraries
###
from rest_framework import serializers

from app.groups.models.groups import Group
from app.student_group.api.v1.serializers.student_group.default import StudentGroupSerializer

###
# Serializers
###


class RetrieveGroupSerializer(serializers.ModelSerializer):
    group_student = StudentGroupSerializer(many=True)

    class Meta:
        model = Group
        fields = ('id','name', 'date', 'group_student',)
