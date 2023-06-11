###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _


###
# Model
###
class Group(models.Model):
    name = models.CharField(
        max_length=256,
        verbose_name=_('Nome da Turma')
    )

    date = models.DateField(
        verbose_name=_('Data da Turma'),
    )

    def __str__(self):
        return f'{self.name} - {self.date}'
