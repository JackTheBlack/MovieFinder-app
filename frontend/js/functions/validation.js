import {login} from "../login.js" ;

var password=document.getElementById("password");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passFormat=/^([a-zA-Z0-9_-]){8,20}$/;
var errorPassword=document.getElementById("error-password");
var errorEmail=document.getElementById("error-email");
var errorResponse=document.getElementById("error-response");
var email=document.getElementById("email");

const emailValidate=(mail)=>{
    if(mail.match(mailformat))
    {

 
   passwordValidate(password.value);
    return true;
    }
    else
    {
    email.style.border="3px solid rgb(232, 11, 11)";    
    errorPassword.style.display="none";
    errorEmail.style.display="block";
    errorResponse.style.display="none";

  
    return false;
    }
}




const passwordValidate=(pass)=>{
    
    let length=pass.length;
    console.log(length);
    if(length<1){
        alert("You forgot to introduce your password");
        password.style.border="3px solid rgb(232, 11, 11)";    
        errorEmail.style.display="none";
        errorPassword.style.display="block";
        return false;
    }else{
        if(pass.match(passFormat))
        {
    
        login(email.value,pass);
       
        return true;
        }
        else
        {
        password.style.border="3px solid rgb(232, 11, 11)";    
        errorEmail.style.display="none";
        errorPassword.style.display="block";
        errorResponse.style.display="none";
      
        return false;
        }

    }
   
}

const responseValidation=(token)=>{
    if (token===undefined){
            errorResponse.style.display="block";
            errorResponse.style.paddingLeft="20%";
            errorPassword.style.display="none";
            errorEmail.style.display="none";
    }

}


export {emailValidate,responseValidation}