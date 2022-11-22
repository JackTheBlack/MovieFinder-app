
import {loginSuccess} from"./functions/loginResults.js";
var btn=document.getElementById("login-btn");
var modal=document.getElementById("myModal");
var errorPassword=document.getElementById("error-password");
var errorEmail=document.getElementById("error-email");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var email=document.getElementById("email");
var password=document.getElementById("password");
var eye=document.getElementById("eye");


const login =async(email,password)=>{
    
    const encodedParams = new URLSearchParams();
  
    encodedParams.append("email", email);
    encodedParams.append("password", password);
       


    const options = {
        method: 'POST',
        body: encodedParams
    };

    await fetch(`http://localhost:3000/login`, options)
    .then(response => response.json())
    .then(response =>loginSuccess(response.accessToken))
    .catch(err => console.log(err));




}



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
    if(length>=1)
    {

   login(email.value,pass);
   
    return true;
    }
    else
    {
    this.password.style.border="3px solid rgb(232, 11, 11)";    
    errorEmail.style.display="none";
    errorPassword.style.display="block";
    alert("You forgot to introduce your password");
  
    return false;
    }
}



btn.onclick=function(){
    emailValidate(email.value);
 
}

eye.onclick=function(){
   
   if(password.type==="password"){
    password.type="text";
   }else{
    password.type="password";
   }
  
   
}

