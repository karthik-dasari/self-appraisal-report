function save_1(){
    var type_of_qualification=document.getElementById('type_of_qualification_dropdown').value;
    var special_adminstration_of_qualification=document.getElementById('special_adminstration_of_qualification_dropdown').value;
    var Name_of_the_staff=document.getElementById('Name_of_the_staff').value;
    var Department=document.getElementById('department_dropdown').value;
    var Designation=document.getElementById('designation_dropdown').value;
    var Date_of_joining=document.getElementById('Date_of_joining').value;
    var Date_of_birth=document.getElementById('Date_of_birth').value;
    var total_experience_years=document.getElementById('total_experience_years').value;
    var total_experience_months=document.getElementById('total_experience_months').value;
    var total_experience=total_experience_years+'.'+total_experience_months;
    var experience_at_viit_years=document.getElementById('experience_at_viit_years').value;
    var experience_at_viit_months=document.getElementById('experience_at_viit_months').value;
    var experience_at_viit=experience_at_viit_years+'.'+experience_at_viit_months;
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    let url='/personal_information';

    if(Name_of_the_staff==""||Name_of_the_staff==null)
    {
        alert("Please fill name field");
    }
    else
    {
        let data={'Name_of_the_staff':Name_of_the_staff,'Department':Department,'Designation':Designation,'Date_of_joining':Date_of_joining,'Date_of_birth':Date_of_birth,'total_experience':total_experience,'experience_at_viit':experience_at_viit,'type_of_qualification':type_of_qualification,'special_adminstration_of_qualification':special_adminstration_of_qualification,'csrfmiddlewaretoken': csrftoken};

        $.post(url,data);

        document.getElementById('next_1').disabled = false;

        alert("Data saved successfully");
    }
}

var addi_education=0;
function addrow_education()
{
    var Qualification=document.getElementById('Qualification').value;
    var Year=document.getElementById('Year').value;
    var College=document.getElementById('College').value;
    var University=document.getElementById('University').value;

    var table=document.getElementById('table_education')[0];

    var rowsize=table_education.rows.length;
    if (Qualification==""||Qualification==null||Year==""||Year==null||University==""||University==null||College==""||College==null) {
        alert("Please Fill All Required Field");
    }
    else
    {
        let newrow=table_education.insertRow(1);
        newrow.id="tr_education_"+addi_education;
        addi_education++;

        let cel1=newrow.insertCell(0);
        let cel2=newrow.insertCell(1);
        let cel3=newrow.insertCell(2);
        let cel4=newrow.insertCell(3);

        cel1.innerHTML=Qualification;
        cel2.innerHTML=Year;
        cel3.innerHTML=College;
        cel4.innerHTML=University;

        document.getElementById('Qualification').value="";
        document.getElementById('Year').value="";
        document.getElementById('College').value="";
        document.getElementById('University').value="";
    }
}

function deleterow_education()
{
    let rowsize=table_education.rows.length;
    if (rowsize>1) {
        document.getElementsByTagName('tr')[1].remove();
    }
}

function save_education()
{
    let noofrows = document.getElementsByTagName('tr').length;
    for(let i=0; i<noofrows-1; i++)
    {
        try
        {
            let getelement= document.getElementById('tr_education_'+i);
            let qualification= document.getElementById('tr_education_'+i).cells.item(0).innerHTML;
            let year= document.getElementById('tr_education_'+i).cells.item(1).innerHTML;
            let university= document.getElementById('tr_education_'+i).cells.item(3).innerHTML;
            let College=document.getElementById('tr_education_'+i).cells.item(2).innerHTML;
            const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
            let url='/education_qualifications';

            let data={'qualification':qualification, 'year':year, 'university':university,'college':College,'csrfmiddlewaretoken': csrftoken };

            $.post(url,data);
        }
        catch(error)
        {
            console.log(error);
        }
    }
    document.getElementById('next_education').disabled = false;

    alert("Data saved successfully");
}

var addi_3=0;
function addrow_3()
{
    var Academic_Year=document.getElementById('Academic_Year').value;
    var Semester=document.getElementById('Semester').value;
    var Year=document.getElementById('Year').value;
    var Subject=document.getElementById('Subject').value;
    var result=document.getElementById('result').value;
    var feedback=document.getElementById('feedback').value;

    var table=document.getElementById('table_3')[0];

    var rowsize=table_3.rows.length;
    if (Semester==""||Semester==null||Year==""||Year==null||Subject==""||Subject==null||result==""||result==null||feedback==""||feedback==null||Academic_Year==""||Academic_Year==null) {
        alert("Please Fill All Required Field");
    }
    else
    {
        let newrow=table_3.insertRow(1);
        newrow.id="tr_3_"+addi_3;
        addi_3++;

        let cel1=newrow.insertCell(0);
        let cel2=newrow.insertCell(1);
        let cel3=newrow.insertCell(2);
        let cel4=newrow.insertCell(3);
        let cel5=newrow.insertCell(4);
        let cel6=newrow.insertCell(5);

        cel1.innerHTML=Academic_Year;
        cel2.innerHTML=Year;
        cel3.innerHTML=Semester;
        cel4.innerHTML=Subject;
        cel5.innerHTML=result;
        cel6.innerHTML=feedback;

        document.getElementById('Semester').value="";
        document.getElementById('Year').value=""
        document.getElementById('Subject').value="";
        document.getElementById('result').value="";
        document.getElementById('feedback').value="";
    }
}

function deleterow_3()
{
    let rowsize=table_3.rows.length;
    if (rowsize>1) {
        document.getElementsByTagName('tr')[1].remove();
    }
}

function save_3()
{
    let noofrows = document.getElementsByTagName('tr').length;
    for(let i=0; i<noofrows-1; i++)
    {
        try
        {
            let getelement= document.getElementById('tr_3_'+i);
            let Academic_Year=document.getElementById('tr_3_'+i).cells.item(0).innerHTML;
            let Semester=document.getElementById('tr_3_'+i).cells.item(1).innerHTML;
            let Year=document.getElementById('tr_3_'+i).cells.item(2).innerHTML;
            let Subject=document.getElementById('tr_3_'+i).cells.item(3).innerHTML;
            let result=document.getElementById('tr_3_'+i).cells.item(4).innerHTML;
            let feedback=document.getElementById('tr_3_'+i).cells.item(5).innerHTML;
            const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

            let url='/result_feedback';

            let data = {'Academic_Year':Academic_Year,'Semester':Semester, 'Year':Year, 'Subject':Subject,'result':result, 'feedback':feedback,'csrfmiddlewaretoken': csrftoken }

            $.post(url,data);
        }
        catch (error)
        {
            console.error(error);
        }
    }
    document.getElementById('next_3').disabled = false;

    alert("Data saved successfully");
}

var addi_research=0;
function addrow_research()
{
    var type=document.getElementById('type').value;
    var calendar_year=document.getElementById('calendar_year').value;
    var title_of_the_paper=document.getElementById('title_of_the_paper').value;
    var volume=document.getElementById('volume').value;
    var issue_number=document.getElementById('issue_number').value;
    var page_numbers=document.getElementById('page_numbers').value;
    var author_position=document.getElementById('author_position').value;
    var file = document.getElementById("file").files[0];

    var table=document.getElementById('table_research')[0];

    var rowsize=table_research.rows.length;
    if(type=="others")
    {
        console.log("1");
        let type=document.getElementById('others').value;
        if(type==""||type==null)
        {
            alert("Please fill others field");
        }
        else
        {
            if (title_of_the_paper==""||title_of_the_paper==null) {
                alert("Please Fill Name of the Journal");
            }
            else
            {
                let newrow=table_research.insertRow(1);
                newrow.id="tr_research_"+addi_research;
                addi_research++;
        
                let cel1=newrow.insertCell(0);
                let cel2=newrow.insertCell(1);
                let cel3=newrow.insertCell(2);
                let cel4=newrow.insertCell(3);
                let cel5=newrow.insertCell(4);
                let cel6=newrow.insertCell(5);
                let cel7=newrow.insertCell(6);
                let cel8=newrow.insertCell(7);
                
                cel1.innerHTML=calendar_year;
                cel2.innerHTML=type;
                cel3.innerHTML=title_of_the_paper;
                cel4.innerHTML=volume;
                cel5.innerHTML=issue_number;
                cel6.innerHTML=page_numbers;
                cel7.innerHTML=author_position;
                cel8.innerHTML=file.name;

                let formData = new FormData();
                    
                formData.append("file", file);
                formData.append("type",type);
                fetch('/upload_file', {method: "POST", body: formData});
            }
        }
    }
    else
    {
        if (type==""||type==null||title_of_the_paper==""||title_of_the_paper==null) {
            alert("Please Fill All Required Field");
        }
        else
        {
            let newrow=table_research.insertRow(1);
            newrow.id="tr_research_"+addi_research;
            addi_research++;
    
            let cel1=newrow.insertCell(0);
            let cel2=newrow.insertCell(1);
            let cel3=newrow.insertCell(2);
            let cel4=newrow.insertCell(3);
            let cel5=newrow.insertCell(4);
            let cel6=newrow.insertCell(5);
            let cel7=newrow.insertCell(6);
            let cel8=newrow.insertCell(7);
            
            cel1.innerHTML=calendar_year;
            cel2.innerHTML=type;
            cel3.innerHTML=title_of_the_paper;
            cel4.innerHTML=volume;
            cel5.innerHTML=issue_number;
            cel6.innerHTML=page_numbers;
            cel7.innerHTML=author_position;
            cel8.innerHTML=file.name;

            let formData = new FormData();
                
            formData.append("file", file);
            formData.append("type",type);
            fetch('/upload_file', {method: "POST", body: formData});
        }
    }
    document.getElementById('type').value="";
    document.getElementById('calendar_year').value="";
    document.getElementById('title_of_the_paper').value="";
    document.getElementById('volume').value="";
    document.getElementById('issue_number').value="";
    document.getElementById('page_numbers').value="";
    document.getElementById('author_position').value="";
}

function deleterow_research()
{
    let rowsize=table_research.rows.length;
    if (rowsize>1) {
        document.getElementsByTagName('tr')[1].remove();
    }
}

function save_research_adin()
{
    let noofrows = document.getElementsByTagName('tr').length;
    for(let i=0; i<noofrows-1; i++)
    {
        let getelement= document.getElementById('tr_research');
        var type=document.getElementById('tr_research_'+i).cells.item(1).innerHTML;
        var calendar_year=document.getElementById('tr_research_'+i).cells.item(0).innerHTML;
        var title_of_the_paper=document.getElementById('tr_research_'+i).cells.item(2).innerHTML;
        var volume=document.getElementById('tr_research_'+i).cells.item(3).innerHTML;
        var issue_number=document.getElementById('tr_research_'+i).cells.item(4).innerHTML;
        var page_numbers=document.getElementById('tr_research_'+i).cells.item(5).innerHTML;
        var author_position=document.getElementById('tr_research_'+i).cells.item(6).innerHTML;
        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        
        let url='/research_contributions';

        let data={'type':type, 'title_of_the_paper':title_of_the_paper,'calendar_year':calendar_year,'volume':volume,'issue_number':issue_number,'page_numbers':page_numbers,'author_position':author_position,'csrfmiddlewaretoken': csrftoken };

        $.post(url,data);
    }

    let college_level=document.getElementById('college_level').value;
    let department_level =document.getElementById('department_level').value;
    let university_level =document.getElementById('university_level').value;
    let any_other_organization =document.getElementById('any_other_organization').value;
    let other_contributions=document.getElementById('other_contributions').value;
    var no_of_students_adopted=document.getElementById('no_of_students_adopted').value;
    var no_of_backlog_subjects_before_counselling=document.getElementById('no_of_backlog_subjects_before_counselling').value;
    var no_of_backlog_subjects_at_the_ending_of_the_year=document.getElementById('no_of_backlog_subjects_at_the_ending_of_the_year').value;
    var name_one_faculty_in_the_entire_college_who_is_most_competitive=document.getElementById('name_one_faculty_in_the_entire_college_who_is_most_competitive').value;
    var name_one_faculty_in_the_department_who_is_most_competitive=document.getElementById('name_one_faculty_in_the_department_who_is_most_competitive').value;
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    let url='/research_adin';

    let data={'college_level':college_level,'department_level':department_level,'university_level':university_level,'any_other_organization':any_other_organization,'other_contributions':other_contributions,'no_of_students_adopted':no_of_students_adopted, 'no_of_backlog_subjects_before_counselling':no_of_backlog_subjects_before_counselling, 'no_of_backlog_subjects_at_the_ending_of_the_year':no_of_backlog_subjects_at_the_ending_of_the_year,'name_one_faculty_in_the_entire_college_who_is_most_competitive':name_one_faculty_in_the_entire_college_who_is_most_competitive,'name_one_faculty_in_the_department_who_is_most_competitive':name_one_faculty_in_the_department_who_is_most_competitive,'csrfmiddlewaretoken': csrftoken };

    $.post(url,data);

    document.getElementById('next_research_adin').disabled = false;

    alert("Data saved successfully");
}

var addi_5=0;
function addrow_5()
{
    var workshop_training_program=document.getElementById('workshop_training_program').value;
    var paid_sponsored=document.getElementById('paid_sponsored').value;
    var duration_dates=document.getElementById('duration_dates').value;
    var place_of_the_institute=document.getElementById('place_of_the_institute').value;

    var table=document.getElementById('table_5')[0];

    var rowsize=table_5.rows.length;
    if (workshop_training_program==""||workshop_training_program==null||paid_sponsored==""||paid_sponsored==null||duration_dates==""||duration_dates==null||place_of_the_institute==""||place_of_the_institute==null) {
        alert("Please Fill All Required Field");
    }
    else
    {
        let newrow=table_5.insertRow(1);
        newrow.id="tr_5_"+addi_5;
        addi_5++;

        let cel1=newrow.insertCell(0);
        let cel2=newrow.insertCell(1);
        let cel3=newrow.insertCell(2);
        let cel4=newrow.insertCell(3);

        cel1.innerHTML=workshop_training_program;
        cel2.innerHTML=paid_sponsored;
        cel3.innerHTML=duration_dates;
        cel4.innerHTML=place_of_the_institute;

        document.getElementById('workshop_training_program').value="";
        document.getElementById('paid_sponsored').value="";
        document.getElementById('duration_dates').value="";
        document.getElementById('place_of_the_institute').value="";
    }
}

function deleterow_5()
{
    let rowsize=table_5.rows.length;
    if (rowsize>1) {
        document.getElementsByTagName('tr')[1].remove();
    }
}

function save_5()
{
    let noofrows = document.getElementsByTagName('tr').length;
    for(let i=0; i<noofrows-1; i++)
    {
        try
        {
            let getelement= document.getElementById('tr_5_'+i);
            let workshop_training_program= document.getElementById('tr_5_'+i).cells.item(0).innerHTML;
            let paid_sponsored= document.getElementById('tr_5_'+i).cells.item(1).innerHTML;
            let duration_dates= document.getElementById('tr_5_'+i).cells.item(2).innerHTML;
            let place_of_the_institute= document.getElementById('tr_5_'+i).cells.item(3).innerHTML;
            const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
            
            let url='/knowledge_improvement_programmes_participated_during_the_year';

            let data={'workshop_training_program':workshop_training_program, 'paid_sponsored':paid_sponsored, 'duration_dates':duration_dates, 'place_of_the_institute':place_of_the_institute,'csrfmiddlewaretoken': csrftoken };

            $.post(url,data);
        }
        catch(error)
        {
            console.log(error);
        }
    }
    document.getElementById('next_5').disabled = false;

    alert("Data saved successfully");
}