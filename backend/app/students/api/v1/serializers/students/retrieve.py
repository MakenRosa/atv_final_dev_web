###
# Libraries
###
from rest_framework import serializers

from app.students.models.student import Student

###
# Serializers
###
class RetrieveStudentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Student
        fields = ('id','full_name', 'contact_number', 'phone_number', 'date_of_birth',
        'street', 'number', 'extra', 'neighborhood', 'city', 'state', 'groups'
        )
