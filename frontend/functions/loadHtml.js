const loadHtml=()=>{

let xhttp;
let element=document.getElementById("modalContent");



xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4){
        if(this.status==400){
            element.innerHTML=this.responseText;
        }
        if(this.status==200){
            element.innerHTML=this.responseText;
        }
    }
};

xhttp.open("GET","./modal.html",true );
xhttp.send();

}

export {loadHtml}