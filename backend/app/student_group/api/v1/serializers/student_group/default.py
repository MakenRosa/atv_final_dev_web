###
# Libraries
###
from rest_framework import serializers
from app.student_group.models.student_group import StudentGroup
from app.students.api.v1.serializers.students.short import ShortStudentSerializer
from ..score.default import ScoreSerializer
from ..attendance.default import AttendanceSerializer


###
# Serializers
###
class StudentGroupSerializer(serializers.ModelSerializer):

    student = ShortStudentSerializer()
    scores = ScoreSerializer(many=True)
    attendances = AttendanceSerializer(many=True)

    class Meta:
        model = StudentGroup
        fields = ('id', 'student', 'scores', 'attendances')
