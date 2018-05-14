# views.py

from django.shortcuts import render, HttpResponse
from django.shortcuts import render_to_response

# Create your views here.
#
# def index(request):
#     return HttpResponse('Hello World!')


def index (request):
    return render_to_response('world.html')

def show_statistics (request):
    return render_to_response('index.html')