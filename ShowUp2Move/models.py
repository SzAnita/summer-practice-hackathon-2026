from django.db import models

# Create your models here.
from django.core.validators import MinLengthValidator, MinValueValidator, MaxValueValidator
from django.contrib.auth.models import AbstractUser, User

import ShowUp2Move


class SportChoices(models.TextChoices):
    Football = 'Football'
    Tennis = 'Tennis'
    Baseball = 'Baseball'
    Basketball = 'Basketball'
    Hockey = 'Hockey'
    Volleyball = 'Volleyball'

class MyUser(User):

    description = models.TextField(null=True, blank=True, max_length=400)
    is_available = models.BooleanField(default=False)
    sport1 = models.CharField(choices=SportChoices, default=SportChoices.Football, max_length=10)
    sport2 = models.CharField(choices=SportChoices, default=SportChoices.Football, max_length=10)
    sport3 = models.CharField(choices=SportChoices, default=SportChoices.Football, max_length=10)

    class SkillLevelChoices(models.TextChoices):
        Beginner = 'Beginner'
        Intermediate = 'Intermediate'
        Advanced = 'Advanced'
        Expert = 'Expert'

    skill1 = models.CharField(choices=SkillLevelChoices, max_length=12, default=SkillLevelChoices.Beginner)
    skill2 = models.CharField(choices=SkillLevelChoices, max_length=12, default=SkillLevelChoices.Beginner)
    skill3 = models.CharField(choices=SkillLevelChoices, max_length=12, default=SkillLevelChoices.Beginner)


class SportGroup(models.Model):
    name = models.CharField(null=True, max_length=100)
    description = models.TextField(null=True, blank=True, max_length=400)
    sport = models.CharField(choices=SportChoices, default=SportChoices.Football, max_length=10)
    min_size = models.IntegerField(default=2)
    max_size = models.IntegerField(default=10)
    captain = models.ForeignKey(MyUser, on_delete=models.CASCADE)

class SportVenue(models.Model):
    name = models.CharField(null=True, max_length=100)
    description = models.TextField(null=True, blank=True, max_length=400)
    location = models.CharField(null=True, max_length=100, unique=True)
    price = models.FloatField(default=0)

class Event(models.Model):
    name = models.CharField(null=True, max_length=100)
    description = models.TextField(null=True, blank=True, max_length=400)
    location = models.CharField(null=True, max_length=100, unique=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    venue = models.ForeignKey(SportVenue, on_delete=models.CASCADE, null=True)