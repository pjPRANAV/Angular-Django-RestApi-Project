from django.db import models


# Create your models here.

class cars(models.Model):
    carname = models.CharField(max_length=20)
    company = models.CharField(max_length=20)
    price = models.IntegerField()
    features = models.CharField(max_length=200)

    def __str__(self):
        return self.carname