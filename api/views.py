import base64
from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Spreadsheet
from .serializers import SpreadsheetSerializer


class SpreadsheetViewSet(viewsets.ModelViewSet):
    queryset = Spreadsheet.objects.all()
    serializer_class = SpreadsheetSerializer

    def create(self, request):
        spreadsheet = self.serializer_class(data=request.data)
        if spreadsheet.is_valid():
            spreadsheet.save()
            return Response(spreadsheet.data, status=status.HTTP_201_CREATED)
        else:
            return Response(spreadsheet.errors, status=status.HTTP_400_BAD_REQUEST)
