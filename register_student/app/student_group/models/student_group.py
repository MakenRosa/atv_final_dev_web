###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _


###
# Model
###
class StudentGroup(models.Model):
    student = models.ForeignKey(
        'students.Student',
        on_delete=models.CASCADE,
        verbose_name=_('Student'),
        related_name='student_group'
    )

    group = models.ForeignKey(
        'groups.Group',
        on_delete=models.CASCADE,
        verbose_name=_('Group'),
        related_name='group_student'
    )

    def __str__(self):
        return f'{self.student} - {self.group}'

