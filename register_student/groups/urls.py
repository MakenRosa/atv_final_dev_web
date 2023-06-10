"""
Groups URL Configuration
"""
###
# Libraries
###
from django.urls import path, include

###
# URL Patterns
###


urlpatterns = [
    path('api/v1/', include('groups.api.v1.urls'))
]
