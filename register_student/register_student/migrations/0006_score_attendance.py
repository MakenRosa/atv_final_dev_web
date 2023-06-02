# Generated by Django 4.2.1 on 2023-06-02 22:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('register_student', '0005_adress_student'),
    ]

    operations = [
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.CharField(max_length=5)),
                ('school_class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='register_student.schoolclass')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='register_student.student')),
            ],
        ),
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('attendance', models.IntegerField(max_length=5)),
                ('school_class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='register_student.schoolclass')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='register_student.student')),
            ],
        ),
    ]
