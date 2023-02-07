import { responseValidation } from "./validation.js";

const loginSuccessRemember=(token)=>{
    if(token===undefined){
        responseValidation(token);
    }else{
        localStorage.setItem('sessionToken', token);
        window.location = 'http://127.0.0.1:5500/frontend/pages/index.html';
    
    }
   
}

const loginSuccess=(token)=>{
 if(token===undefined){
    responseValidation(token)
    }else{
        sessionStorage.setItem('sessionToken', token);
        window.location = 'http://127.0.0.1:5500/frontend/pages/index.html';
    
    }
   
}


export  {loginSuccess,loginSuccessRemember};