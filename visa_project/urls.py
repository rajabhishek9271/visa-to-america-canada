"""visa_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from visa_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.HomePage.as_view(),name="index"),
    path('inner/', views.InnerPage.as_view(),name="inner"),
    path('portfolio/', views.PortfolioPage.as_view(),name="portfolio"),
    path('pricing/', views.PricingPage.as_view(),name="pricing"),
    path('services/', views.ServicesPage.as_view(),name="services"),
    path('team/', views.TeamPage.as_view(),name="team"),
    path('about/', views.AboutPage.as_view(),name="about"),
    path('contact/', views.ContactPage.as_view(),name="contact"),

]
