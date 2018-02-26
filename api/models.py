from django.db import models

# Create your models here.
class Spreadsheet(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255, blank=True)
    document = models.FileField(upload_to='spreadsheets/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
