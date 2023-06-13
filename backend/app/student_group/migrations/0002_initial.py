# Generated by Django 4.2.1 on 2023-06-12 16:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('students', '0001_initial'),
        ('student_group', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentgroup',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='student_group', to='students.student', verbose_name='Student'),
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
