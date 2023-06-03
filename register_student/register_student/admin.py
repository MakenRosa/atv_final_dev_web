from django.contrib import admin
from .models import SchoolClass, SchoolSubjects, Student, Adress, Attendance, Score


class SchoolClassAdmin(admin.ModelAdmin):
    list_display = (
        'school_subjects',
        'date'
    )


# Register your models here.
admin.site.register(SchoolClass, SchoolClassAdmin)
admin.site.register(SchoolSubjects)
admin.site.register(Student)
admin.site.register(Adress)
admin.site.register(Attendance)
admin.site.register(Score)
