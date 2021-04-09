from django.db import models

class PersonalInformation(models.Model):
    one_id=models.IntegerField(null=False)
    Name_of_the_staff=models.CharField(max_length=264,blank=False)
    Department=models.CharField(max_length=264,blank=False)
    Designation=models.CharField(max_length=264,blank=False)
    Date_of_joining=models.DateField(blank=False,null=True)
    experience_at_viit=models.DecimalField(blank=False,null=True, decimal_places=2, max_digits=10)
    total_experience=models.DecimalField(blank=False,null=True, decimal_places=2, max_digits=10)
    Date_of_birth=models.DateField(blank=False,null=True)
    type_of_qualification=models.CharField(max_length=264,blank=False)
    special_adminstration_of_qualification=models.CharField(max_length=264,blank=False)

    class Meta:
        db_table="personal_information"

class EducationQualifications(models.Model):
    one_id=models.IntegerField(null=False)
    qualification=models.CharField(max_length=264)
    year=models.IntegerField()
    college=models.CharField(max_length=264)
    university=models.CharField(max_length=264)

    class Meta:
        db_table="education_qualifications"

class ResultFeedback(models.Model):
    one_id=models.IntegerField(null=False)
    Academic_Year=models.CharField(max_length=264)
    Semester=models.CharField(max_length=264)
    Year=models.IntegerField()
    Subject=models.CharField(max_length=264)
    result=models.FloatField()
    feedback=models.FloatField()

    class Meta:
        db_table="result_feedback"

class AdministrativeInvolvement(models.Model):
    one_id=models.IntegerField(null=False)
    college_level=models.CharField(max_length=1000)
    departmentlevel=models.CharField(max_length=1000)
    universitylevel=models.CharField(max_length=1000)
    anyotherorganization=models.CharField(max_length=1000)
    other_contributions=models.CharField(max_length=1000)

    class Meta:
        db_table="administrative_involvement"

class PerformanceOfCounsellingStudents(models.Model):
    one_id=models.IntegerField(null=False)
    no_of_students_adopted=models.IntegerField()
    no_of_backlog_subjects_before_counselling=models.IntegerField()
    no_of_backlog_subjects_at_the_ending_of_the_year=models.IntegerField()

    class Meta:
        db_table="performance_of_counselling_students"

class KnowledgeImprovementProgrammesParticipatedDuringTheYear(models.Model):
    one_id=models.IntegerField(null=False)
    workshop_training_program=models.CharField(max_length=264)
    paid_sponsored=models.CharField(max_length=264)
    duration_dates=models.CharField(max_length=264)
    place_of_the_institute=models.CharField(max_length=264)

    class Meta:
        db_table="knowledge_improvement_programmes_participated_during_the_year"

class Users(models.Model):
    username=models.CharField(max_length=264)
    password=models.CharField(max_length=264)
    email=models.EmailField(max_length=264)
    phonenumber=models.IntegerField()
    
    class Meta:
        db_table ="users"

class Competition(models.Model):
    one_id=models.IntegerField(null=False)
    name_one_faculty_in_the_entire_college_who_is_most_competitive=models.CharField(max_length=264)
    name_one_faculty_in_the_department_who_is_most_competitive=models.CharField(max_length=264)

    class Meta:
        db_table ="competiton"

class ResearchContribution(models.Model):
    one_id=models.IntegerField(null=False)
    calendar_year=models.IntegerField(null=False)
    Type=models.CharField(max_length=1000)
    name_of_the_journal=models.CharField(max_length=1000)
    volume=models.CharField(max_length=1000)
    issue_number=models.IntegerField(null=False)
    page_numbers=models.CharField(max_length=1000,null=False)
    author_position=models.IntegerField(null=False)

    class Meta:
        db_table ="research_contributions"

class UploadFile(models.Model):
    one_id=models.IntegerField(null=False)
    file=models.FileField()

    class Meta:
        db_table ="upload_file"

class ForCalOfMarks(models.Model):
    one_id=models.IntegerField(null=False)
    feedback_marks=models.FloatField(default=0)
    current_result_marks=models.FloatField(default=0)
    average_result_marks=models.FloatField(default=0)
    different_of_result_marks=models.FloatField(default=0)
    research_papers_marks=models.FloatField(default=0)
    adminstrative_marks=models.FloatField(default=0)

    class Meta:
        db_table ="for_cal_of_marks"

class MaxMarks(models.Model):
    qualification=models.CharField(max_length=264)
    feedback_marks=models.FloatField()
    result_marks=models.FloatField()
    adminstrative_marks=models.FloatField()
    research_papers_marks=models.FloatField()
    other_marks=models.FloatField(default=0)

    class Meta:
        db_table="max_marks"