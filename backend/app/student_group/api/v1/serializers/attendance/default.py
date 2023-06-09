###
# Libraries
###
from rest_framework import serializers
from app.student_group.models.attendance import Attendance

###
# Serializers
###


class AttendanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Attendance
        fields = '__all__'
