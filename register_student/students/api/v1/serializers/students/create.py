###
# Libraries
###
from rest_framework import serializers

from students.models.student import Student
from groups.models.groups import Group


###
# Serializers
###


class CreateStudentSerializer(serializers.ModelSerializer):
    groups = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Group.objects.filter()
        )
    
    def validate(self, attr):
        group_ids = self.initial_data.get('groups', None)
        if group_ids:
            attr['groups'] = set(group_ids)
        return attr
    
    class Meta:
        model = Student
        fields = ('id', 'full_name', 'contact_number', 'phone_number', 'date_of_birth',
                  'street', 'number', 'extra', 'neighborhood', 'city', 'state', 'groups'
                  )
