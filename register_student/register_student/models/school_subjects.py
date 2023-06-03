from django.db import models


class SchoolSubjects(models.Model):
    name = models.CharField(
        max_length=30,
        null=False,
        unique=True
    )

    def __str__(self) -> str:
        return self.name
