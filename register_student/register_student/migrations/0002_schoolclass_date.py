# Generated by Django 4.2.1 on 2023-06-01 22:56

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register_student', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='schoolclass',
            name='date',
            field=models.DateField(default=datetime.date(2023, 6, 1)),
        ),
    ]