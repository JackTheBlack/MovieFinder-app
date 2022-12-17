

const loginSuccessRemember=(token)=>{

    localStorage.setItem('sessionToken', token);
    window.location = 'http://127.0.0.1:5500/index.html';

}

const loginSuccess=(token)=>{

    sessionStorage.setItem('sessionToken', token);
    window.location = 'http://127.0.0.1:5500/index.html';

}


export  {loginSuccess,loginSuccessRemember};