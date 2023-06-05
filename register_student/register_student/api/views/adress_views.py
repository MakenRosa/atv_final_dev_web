from register_student.models import Adress
from rest_framework import viewsets, permissions

from ..serializers.adress_serializers import AdressSerializer


class AdressViewSet(viewsets.ModelViewSet):
    queryset = Adress.objects.all()
    permission_classes = [permissions.AllowAny,]
    serializer_class = AdressSerializer
