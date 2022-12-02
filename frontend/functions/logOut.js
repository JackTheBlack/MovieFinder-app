const logOut=()=>{

    console.log("logout");
    window.localStorage.removeItem('user');
    window.sessionStorage.removeItem('user');
    window.location = 'http://127.0.0.1:5500/frontend/login.html';
}


export {logOut}