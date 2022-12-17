
import {loginSuccess, loginSuccessRemember} from"./functions/loginResults.js";
import {emailValidate} from "./functions/validation.js";



var btn=document.getElementById("login-btn");
var modal=document.getElementById("myModal");

var email=document.getElementById("email");

var eye=document.getElementById("eye");


var rememberMe=document.getElementById("rememberMe");


const login =async(email,password)=>{
    
    const encodedParams = new URLSearchParams();
  
    encodedParams.append("email", email);
    encodedParams.append("password", password);
       


    const options = {
        method: 'POST',
        body: encodedParams
    };
    if (rememberMe.checked){

        await fetch(`http://localhost:3000/login`, options)
        .then(response => response.json())
        .then(response =>loginSuccessRemember(response.accessToken))
        .catch(err => console.log(err));
    

    }else{

        console.log(rememberMe.checked);
        await fetch(`http://localhost:3000/login`, options)
        .then(response => response.json())
        .then(response =>loginSuccess(response.accessToken))
        .catch(err => console.log(err));
    
    }
   



}






btn.onclick=function(){
 console.log("fdfdfd")
    emailValidate(email.value);
 
}

eye.onclick=function(){
   
   if(password.type==="password"){
    password.type="text";
   }else{
    password.type="password";
   }
  
   
}

export {login}