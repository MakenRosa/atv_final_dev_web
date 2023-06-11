###
# Libraries
###
from rest_framework import serializers

from students.models.student import Student

###
# Serializers
###


class ShortStudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = ('id', 'full_name',)
