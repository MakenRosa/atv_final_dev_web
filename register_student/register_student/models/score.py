from django.db import models
from .school_class import SchoolClass
from .student import Student


class Score(models.Model):
    score = models.CharField(
        max_length=5
    )
    school_class = models.ForeignKey(SchoolClass, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
