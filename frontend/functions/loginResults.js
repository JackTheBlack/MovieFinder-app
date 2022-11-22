

const loginSuccess=(token)=>{

    localStorage.setItem('seassonToken', token);
    window.location = 'http://127.0.0.1:5500/frontend/index.html';

}

export {loginSuccess};