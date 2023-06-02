from rest_framework import serializers
from register_student.models import SchoolSubjects


class SchoolSubjectsSerializer(serializers.ModelSerializer):

    class Meta:
        model = SchoolSubjects
        fields = '__all__'
