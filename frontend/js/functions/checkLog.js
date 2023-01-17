

const checkLogin=()=>{

    var lStorage=localStorage.getItem("sessionToken");
    var body=document.getElementById("body");
    var div=document.createElement("DIV");
    div.innerText="Redirectig to Login";
    var sStorage=sessionStorage.getItem("sessionToken");

    if ((lStorage===null)&&(sStorage===null)){
        console.log("entro aqui")
        body.style.display="none";
        window.location = 'http://127.0.0.1:5500/frontend/login.html';


    }



}

export {checkLogin}