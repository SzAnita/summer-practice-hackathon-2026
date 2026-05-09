from rest_framework import serializers
from ShowUp2Move.models import MyUser, SportGroup, Event, SportVenue


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        groups = serializers.PrimaryKeyRelatedField(many=True, queryset=SportGroup.objects.all())
        fields = ['id', 'email', 'first_name', 'last_name', 'password', 'description', 'is_available',
                  'sport1', 'sport2', 'sport3', 'skill1', 'skill2', 'skill3', 'groups']

class SportGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = SportGroup
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class SportVenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = SportVenue
        fields = '__all__'