"""
StudentRL Configuration
"""
###
# Libraries
###
from django.urls import path, include

###
# URL Patterns
###
urlpatterns = [
    path('api/v1/', include('app.students.api.v1.urls'))
]
