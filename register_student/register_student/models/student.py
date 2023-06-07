from django.db import models
from .school_class import SchoolClass
from .address import Address


class Student(models.Model):
    name = models.CharField(
        max_length=100,
        null=False,
    )
    phone = models.CharField(
        max_length=10,
        null=False
    )
    registration = models.CharField(
        max_length=10,
        unique=True,
        error_messages={
            'unique': 'Já existe essa matrícula.'
        }
    )
    date_born = models.DateField(
        null=False
    )
    cell_phone = models.CharField(
        max_length=10,
        null=False
    )
    school_classes = models.ManyToManyField(
        SchoolClass,
        related_name='students'
    )
    address = models.ForeignKey(
        Address,
        on_delete=models.CASCADE
    )
