from django.shortcuts import redirect, render
from website.models import *
from django.http import HttpResponse
from django.db import connection
from django.core.files.storage import FileSystemStorage
from django.views.decorators.csrf import csrf_exempt
import os

getid=-1
type_of_qualification=None
feedback=0
formpage1=False
formpage2=False
formpage3=False
formpage4=False
formpage5=False

def welcome(request):
    return render(request,'welcome.html')

def register(request):
    if request.method == 'POST':
        username=request.POST.get('username')
        email=request.POST.get('email')
        password=request.POST.get('password')
        phonenumber=request.POST.get('phonenumber')
        cursor=connection.cursor()
        if cursor.execute(' SELECT * FROM users WHERE email=%s or username=%s ',(email,username)):
            return render(request,'register.html',{'msg':"Already registered"})
        else :
            data=Users(username=username,email=email,password=password,phonenumber=phonenumber)
            data.save()
        connection.commit()
        cursor.close()
        return render(request,'login.html')
    else :
        return render(request,'register.html')

def login(request):
    if request.method =='POST':
        global getid
        username=request.POST.get('username')
        password=request.POST.get('password')
        cursor=connection.cursor()
        if cursor.execute(' SELECT * FROM users WHERE username=%s or password=%s ',(username,password)):
            if cursor.execute(' SELECT * FROM users WHERE username=%s and password=%s ',(username,password)):
                account=cursor.fetchone()
                request.session['loggedin'] = True
                request.session['id'] = account[0]
                request.session['username'] = account[1]
                getid=account[1]
                request.session.set_expiry(0)
                return redirect('/next')
            elif cursor.execute(' SELECT * FROM users WHERE username=%s ',(username,)):
                return render(request,'login.html',{'msg':"Wrong password",'username':username})
            else :
                return render(request,'login.html',{'msg':"Invalid details"})
        else :
            return render(request,'login.html',{'msg':"Invalid details"})
    else:
        return render(request,'login.html')

def logout(request):
    request.session['loggedin']=False
    return render(request,'login.html')

def personal_information(request):
    global formpage1,type_of_qualification
    if request.method =='POST' and request.session['loggedin']:
        Name_of_the_staff=request.POST.get('Name_of_the_staff')
        Department=request.POST.get('Department')
        Designation=request.POST.get('Designation')
        Date_of_joining=request.POST.get('Date_of_joining')
        experience_at_viit=request.POST.get('experience_at_viit')
        total_experience=request.POST.get('total_experience')
        Date_of_birth=request.POST.get('Date_of_birth')
        type_of_qualification=request.POST.get('type_of_qualification')
        special_adminstration_of_qualification=request.POST.get('special_adminstration_of_qualification')
        data=PersonalInformation(one_id=getid,Name_of_the_staff=Name_of_the_staff,Department=Department,Designation=Designation,Date_of_joining=Date_of_joining,experience_at_viit=experience_at_viit,total_experience=total_experience,Date_of_birth=Date_of_birth,type_of_qualification=type_of_qualification,special_adminstration_of_qualification=special_adminstration_of_qualification)
        data.save()
        formpage1=True
        return HttpResponse("ok")
    else:
        if request.session['loggedin']:
            return render(request,'personal_information.html')
        else:
            return render(request,'login.html',{'msg':"Please Log In"})

def education_qualifications(request):
    global formpage2
    if request.method =='POST' and request.session['loggedin']:
        qualification=request.POST.get('qualification')
        year=request.POST.get('year')
        college=request.POST.get('college')
        university=request.POST.get('university')
        data=EducationQualifications(one_id=getid,qualification=qualification,year=year,university=university,college=college)
        data.save()
        formpage2=True
        return HttpResponse("ok")
    else:
        if request.session['loggedin'] and formpage1:
            return render(request,'education_qualifications.html',{'n':range(1970,2021)})
        elif request.session['loggedin']:
            return redirect('/personal_information')
        else:
            return render(request,'login.html',{'msg':"Please Log In"})

def result_feedback(request):
    global feedback,formpage3
    if request.method =='POST' and request.session['loggedin']:
        Academic_Year=request.POST.get('Academic_Year')
        Semester=request.POST.get('Semester')
        Year=request.POST.get('Year')
        Subject=request.POST.get('Subject')
        result=request.POST.get('result')
        feedback=request.POST.get('feedback')
        data=ResultFeedback(one_id=getid,Academic_Year=Academic_Year,Semester=Semester,Year=Year,Subject=Subject,result=result,feedback=feedback)
        data.save()
        formpage3=True
        return HttpResponse("ok")
    else:
        if request.session['loggedin'] and formpage1 and formpage2:
            return render(request,'result_feedback.html')
        elif request.session['loggedin'] and formpage1:
            return render(request,'education_qualifications.html')
        elif request.session['loggedin']:
            return redirect('/personal_information')
        else:
            return render(request,'login.html',{'msg':"Please Log In"})

def research_adin(request):
    global formpage4
    if request.method =='POST' and request.session['loggedin']:
        college_level=request.POST.get('college_level')
        department_level=request.POST.get('department_level')
        university_level=request.POST.get('university_level')
        any_other_organization=request.POST.get('any_other_organization')
        other_contributions=request.POST.get('other_contributions')
        no_of_students_adopted=request.POST.get('no_of_students_adopted')
        no_of_backlog_subjects_before_counselling=request.POST.get('no_of_backlog_subjects_before_counselling')
        no_of_backlog_subjects_at_the_ending_of_the_year=request.POST.get('no_of_backlog_subjects_at_the_ending_of_the_year')
        name_one_faculty_in_the_entire_college_who_is_most_competitive=request.POST.get('name_one_faculty_in_the_entire_college_who_is_most_competitive')
        name_one_faculty_in_the_department_who_is_most_competitive=request.POST.get('name_one_faculty_in_the_department_who_is_most_competitive')
        data12=AdministrativeInvolvement(one_id=getid,college_level=college_level,departmentlevel=department_level,universitylevel=university_level,anyotherorganization=any_other_organization,other_contributions=other_contributions)
        data=PerformanceOfCounsellingStudents(one_id=getid,no_of_students_adopted=no_of_students_adopted,no_of_backlog_subjects_before_counselling=no_of_backlog_subjects_before_counselling,no_of_backlog_subjects_at_the_ending_of_the_year=no_of_backlog_subjects_at_the_ending_of_the_year)
        data11=Competition(one_id=getid,name_one_faculty_in_the_department_who_is_most_competitive=name_one_faculty_in_the_department_who_is_most_competitive,name_one_faculty_in_the_entire_college_who_is_most_competitive=name_one_faculty_in_the_entire_college_who_is_most_competitive)
        data.save()
        data12.save()
        data11.save()
        formpage4=True
        return HttpResponse("ok")
    else:
        if request.session['loggedin'] and formpage1 and formpage2 and formpage3:
            return render(request,'research_adin.html')
        elif request.session['loggedin'] and formpage1 and formpage2:
            return render(request,'result_feedback.html')
        elif request.session['loggedin'] and formpage1:
            return render(request,'education_qualifications.html')
        elif request.session['loggedin']:
            return redirect('/personal_information')
        else:
            return render(request,'login.html',{'msg':"Please Log In"})

def knowledge_improvement_programmes_participated_during_the_year(request):
    global formpage5
    if request.method =='POST' and request.session['loggedin']:
        workshop_training_program=request.POST.get('workshop_training_program')
        paid_sponsored=request.POST.get('paid_sponsored')
        duration_dates=request.POST.get('duration_dates')
        place_of_the_institute=request.POST.get('place_of_the_institute')
        data=KnowledgeImprovementProgrammesParticipatedDuringTheYear(one_id=getid,workshop_training_program=workshop_training_program,paid_sponsored=paid_sponsored,duration_dates=duration_dates,place_of_the_institute=place_of_the_institute)
        data.save()
        formpage5=True
        return HttpResponse("ok")
    else:
        if request.session['loggedin']:
            return render(request,'knowledge_improvement_programmes_participated_during_the_year.html')
        else:
            return render(request,'login.html',{'msg':"Please Log In"})

def research_contributions(request):
    if request.method =='POST' and request.session['loggedin']:
        calendar_year=request.POST.get('calendar_year')
        type_of_paper=request.POST.get('type')
        title_of_the_paper=request.POST.get('title_of_the_paper')
        volume=request.POST.get('volume')
        issue_number=request.POST.get('issue_number')
        page_numbers=request.POST.get('page_numbers')
        author_position=request.POST.get('author_position')
        data=ResearchContribution(one_id=getid,name_of_the_journal=title_of_the_paper,Type=type_of_paper,calendar_year=calendar_year,volume=volume,issue_number=issue_number,page_numbers=page_numbers,author_position=author_position)
        data.save()
        return HttpResponse("ok")

upload_count=1
@csrf_exempt
def upload_file(request):
    global upload_count
    file=request.FILES['file']
    type_of_paper=request.POST.get('type')
    extension = os.path.splitext(file.name)[1]
    file.name=str(getid)+"_"+str(upload_count)+"_"+type_of_paper+extension
    data=UploadFile.objects.create(file=file,one_id=getid)
    data.save()
    upload_count+=1
    return HttpResponse("ok")

def thankyou(request):
    if request.session['loggedin']:
        return render(request,'thankyou.html')

def data_filled(request):
    queryset1=PersonalInformation.objects.all().filter(one_id=getid)
    if str(queryset1)=="<QuerySet []>":
        return render(request,'datanotfound.html')
    else:
        queryset2=EducationQualifications.objects.all().filter(one_id=getid)
        queryset3=ResultFeedback.objects.all().filter(one_id=getid)
        queryset4=ResearchContribution.objects.all().filter(one_id=getid)
        queryset5=AdministrativeInvolvement.objects.all().filter(one_id=getid)
        queryset6=PerformanceOfCounsellingStudents.objects.all().filter(one_id=getid)
        queryset7=KnowledgeImprovementProgrammesParticipatedDuringTheYear.objects.all().filter(one_id=getid)
        return render(request,'data_filled.html',{'data':queryset1,'data_2':queryset2,'data_3':queryset3,'data_4':queryset4,'data_5':queryset5,'data_6':queryset6,'data_7':queryset7})

def next(request):
    if request.session['loggedin']:
        return render(request,'after_login.html')
# def cal_marks(request):
#     if request.method =='POST' and request.session['loggedin']:
#         if feedback:
#             feedback_marks=12