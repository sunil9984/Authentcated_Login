//validatiob code for the input data

var Email=document.forms['form']['Email'];
var password=document.forms['form']['password'];


var Email_error=document.getElementById('Email_error');
var password_error=document.getElementById('password_error');


Email.addEventlistener('textInput',Email_verify);
password.addEventlistener('textInput',password_verify);




function validated(){
    if(Email.value.lenth<9){
        Email.style.border="1 px solid red"; 
        Email_error.style.display="Block";
        Email.focus();
        return false;
    }

    if(password.value.lenth<6){
        password.style.border="1 px solid red"; 
        password_error.style.display="Block";
        password.focus();
        return false;
    }
}

function email_verify(){
    if(email.value.lenth>=8){
        email.style.border="1 px solid silver"; 
        email_error.style.display="none";
        return true;
    }
}

function password_verify(){
    if(password.value.lenth>=5){
        password.style.border="1 px solid silver"; 
        password_error.style.display="none";
        return true;
    }
}