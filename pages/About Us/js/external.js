function validateForm(){
    var name=document.forms["SurveyForm"]["Name"].value;
    var mail=document.forms["SurveyForm"]["Email"].value;
    var age=document.forms["SurveyForm"]["Age"].value;
    var profession=document.forms["SurveyForm"]["Who are you ?"].value;
    var experience=document.forms["SurveyForm"]["Your experience in Kyma"].value;
    var thoughts=document.forms["SurveyForm"]["What do you think of our webpage ?"].value;
    var sale=document.forms["SurveyForm"]["What do you think of our products in sale ?"].value;
    var recommendation=document.forms["SurveyForm"]["Would you recommend this webpage to others ?"].value;
    var authentic=document.forms["SurveyForm"]["Do you think the webpage is authentic ?"].value;
    var preference=document.forms["SurveyForm"]["Which do you prefer more ?"].value;
    var rating=document.forms["SurveyForm"]["Choice"].value;
    var remarks=document.forms["SurveyForm"]["Any Comments or Remarks"].value;
   if (name==""||mail==""||age==""||remarks==""||profession==""||experience==""||thoughts==""||sale==""||recommendation==""
       ||authentic==""||preference==""||rating=="") {
       alert("Empty required fields found.");
       
   } else {
       alert("Thank You for the feedback.");
        
   }
}