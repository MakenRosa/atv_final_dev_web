from ..models.attendance import Attendance
from ..models.score import Score
from ..models.student_group import StudentGroup
from django.contrib import admin


admin.site.register(StudentGroup)
admin.site.register(Score)
admin.site.register(Attendance)
