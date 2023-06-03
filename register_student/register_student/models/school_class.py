from django.db import models
from .school_subjects import SchoolSubjects
from django.utils import timezone


class SchoolClass(models.Model):
    school_subjects = models.ForeignKey(
        SchoolSubjects,
        on_delete=models.CASCADE
    )
    date = models.DateField(default=timezone.now)
