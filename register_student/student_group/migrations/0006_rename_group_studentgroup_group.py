# Generated by Django 4.2.1 on 2023-06-09 22:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('student_group', '0005_rename_students_studentgroup_student'),
    ]

    operations = [
        migrations.RenameField(
            model_name='studentgroup',
            old_name='Group',
            new_name='group',
        ),
    ]