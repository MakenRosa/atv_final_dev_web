from register_student.models import Address
from rest_framework import viewsets, permissions

from ..serializers.address_serializers import AddressSerializer


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    permission_classes = [permissions.AllowAny,]
    serializer_class = AddressSerializer
