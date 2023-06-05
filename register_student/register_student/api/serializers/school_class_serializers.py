from rest_framework import serializers
from register_student.models import SchoolClass, SchoolSubjects
from ..serializers.school_subjects_serializers import SchoolSubjectsSerializer


class SchoolClassSerializer(serializers.ModelSerializer):

    subjects = serializers.CharField(write_only=True)

    def validate(self, attrs):
        subjects = attrs.pop('subjects')
        try:
            school_subjects = SchoolSubjects.objects.get(name=subjects)
        except SchoolSubjects.DoesNotExist:
            school_subjects = SchoolSubjects.objects.create(name=subjects)
        attrs['school_subjects'] = school_subjects
        return super().validate(attrs)

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['school_subjects'] = SchoolSubjectsSerializer(
            instance.school_subjects).data
        return ret

    class Meta:
        model = SchoolClass
        fields = [
            'id',
            'subjects',
            'date'
        ]
