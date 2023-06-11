###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _


###
# Model
###
class Score(models.Model):
    score = models.IntegerField()

    student_group = models.ForeignKey(
        'student_group.StudentGroup',
        on_delete=models.CASCADE,
        verbose_name=_('Estudante turma'),
        related_name='scores'
    )

    date = models.DateField(
        verbose_name=_('Data da Turma'),
    )
