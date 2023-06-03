from django.db import models
from .school_class import SchoolClass
from .student import Student


class Attendance(models.Model):
    attendance = models.IntegerField()
    school_class = models.ForeignKey(SchoolClass, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
