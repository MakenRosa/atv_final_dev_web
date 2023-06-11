from django.contrib import admin
from ..models.student import Student


class StudentAdmin(admin.ModelAdmin):
    list_display = ('id', 'full_name', )


admin.site.register(Student, StudentAdmin)
