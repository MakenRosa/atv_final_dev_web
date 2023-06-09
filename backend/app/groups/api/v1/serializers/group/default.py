###
# Libraries
###
from rest_framework import serializers

from app.groups.models.groups import Group

###
# Serializers
###


class DefaultGroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = ('id', 'name', 'date',)
