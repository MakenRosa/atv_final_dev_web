from django.db import models


class Adress(models.Model):
    street = models.CharField(max_length=100, null=False)
    district = models.CharField(max_length=100, null=False)
    city = models.CharField(max_length=100, null=False)
    complement = models.CharField(max_length=50, null=False)
    number = models.CharField(max_length=10, null=False)
    fu = models.CharField(max_length=5, null=False)
