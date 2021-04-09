from django.contrib import admin
from django.urls import include, path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',views.welcome),
    path('personal_information',views.personal_information,name='personal_information'),
    path('education_qualifications',views.education_qualifications,name='education_qualifications'),
    path('result_feedback',views.result_feedback,name='result_feedback'),
    path('research_adin',views.research_adin,name='research_adin'),
    path('knowledge_improvement_programmes_participated_during_the_year',views.knowledge_improvement_programmes_participated_during_the_year,name='knowledge_improvement_programmes_participated_during_the_year'),
    path('login',views.login,name='login'),
    path('logout',views.logout,name='logout'),
    path('thankyou',views.thankyou,name='thankyou'),
    path('data_filled',views.data_filled,name='data_filled'),
    path('research_contributions',views.research_contributions,name='research_contributions'),
    path('upload_file',views.upload_file,name='upload_file'),
    path('register',views.register,name='register'),
    path('welcome',views.welcome,name='welcome'),
    path('next',views.next,name='next'),
] 