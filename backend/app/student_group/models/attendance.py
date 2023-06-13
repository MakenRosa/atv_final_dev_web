###
# Libs
###
from django.db import models
from .student_group import StudentGroup
from django.utils.translation import gettext as _


###
# Model
###
class Attendance(models.Model):
    attendance = models.IntegerField()
    
    date = models.DateField(
        verbose_name=_('Data da Falta'),
    )
    student_group = models.ForeignKey(
        'student_group.StudentGroup',
        on_delete=models.CASCADE,
        verbose_name=_('Student Group'),
        related_name='attendances'
    )
