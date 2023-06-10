# Generated by Django 4.2.1 on 2023-06-09 02:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('student_group', '0001_initial'),
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentgroup',
            name='students',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='groups', to='students.student', verbose_name='Student'),
        ),
        migrations.AddField(
            model_name='score',
            name='student_group',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='scores', to='student_group.studentgroup', verbose_name='Estudante turma'),
        ),
        migrations.AddField(
            model_name='attendance',
            name='student_group',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='attendances', to='student_group.studentgroup', verbose_name='Student Group'),
        ),
    ]
