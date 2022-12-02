
var password=document.getElementById("password");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passFormat=/^([a-zA-Z0-9_-]){8,20}$/;
var errorPassword=document.getElementById("error-password");
var errorEmail=document.getElementById("error-email");
var email=document.getElementById("email");

const emailValidate=(email)=>{
    if(email.match(mailformat))
    {

 
   passwordValidate(password.value);
    return true;
    }
    else
    {
    this.email.style.border="3px solid rgb(232, 11, 11)";    
    errorPassword.style.display="none";
    errorEmail.style.display="block";
   
    alert("You have entered an invalid email address!");
  
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
        if(pass.match(mailformat))
        {
    
        login(email.value,pass);
       
        return true;
        }
        else
        {
        password.style.border="3px solid rgb(232, 11, 11)";    
        errorEmail.style.display="none";
        errorPassword.style.display="block";
       
        alert("The mail format is wriong");
        return false;
        }

    }
   
}




export {emailValidate}