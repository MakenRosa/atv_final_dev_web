from django.contrib import admin
from .models import SchoolClass, SchoolSubjects


class SchoolClassAdmin(admin.ModelAdmin):
    list_display = (
        'school_subjects',
        'date'
    )


# Register your models here.
admin.site.register(SchoolClass, SchoolClassAdmin)
admin.site.register(SchoolSubjects)
