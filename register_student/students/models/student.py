###
# Libraries
###
from django.db import models
from django.utils.translation import gettext as _
from groups.models.groups import Group
from student_group.models.student_group import StudentGroup


###
# Models
###
class Student(models.Model):
    ###
    # General information
    ###
    full_name = models.CharField(
        max_length=128,
        verbose_name=_('Nome'),
    )

    contact_number = models.CharField(
        max_length=32,
        verbose_name=_('Telefone'),
    )

    phone_number = models.CharField(
        max_length=32,
        verbose_name=_('Celular'),
    )

    date_of_birth = models.DateField(
        verbose_name=_('Data de Nascimento'),
    )

    ###
    # Address
    ###
    street = models.CharField(
        max_length=512,
        verbose_name=_('Logradouro/Rua'),
    )

    number = models.CharField(
        max_length=16,
        verbose_name=_('Número'),
    )

    extra = models.CharField(
        max_length=64,
        verbose_name=_('Complemento'),
    )

    neighborhood = models.CharField(
        max_length=64,
        verbose_name=_('Bairro'),
    )

    city = models.CharField(
        max_length=256,
        verbose_name=_('Cidade'),
    )

    state = models.CharField(
        max_length=2,
        verbose_name=_('Estado'),
    )

    ###
    # Group
    ###
    groups = models.ManyToManyField(
        Group,
        verbose_name=_('Turmas'),
        through='student_group.StudentGroup',
    )


