
import { bringMovie } from "./modal.js";
import { createModalCard } from "./card.js";

var listNode=document.getElementById("list");
var dialog=document.getElementById("dialog");
let cardPath="http://www.themoviedb.org/t/p/w220_and_h330_face/";

//////////////////  Create the list/////////////////
const getList=(array)=>{


    listNode.innerHTML=''
    ///// check if the input got more than 3 words////////////////////
    if(array.length>=3){
      
        for(let x=0;x<=5;x++){
            listNode.style.display="block";
          var liNode=document.createElement("div");
            liNode.style.display="flex"
            liNode.className="item-list";
            var title=document.createElement("section");
         
            title.style.marginTop="30px";
            title.style.fontSize="14px";
            title.style.marginLeft="2%";
        
             title.innerText=array[x].title;           
            title.id=array[x].id;  
           console.log(title)
            cardPath="http://www.themoviedb.org/t/p/w220_and_h330_face/";
         let card=createModalCard(array[x], cardPath,false);
            card.id=array[x].id;
         liNode.id=array[x].id ;         
         liNode.appendChild(card);
            liNode.appendChild(title);
            listNode.appendChild(liNode);
        
           liNode.addEventListener("click",function(){
            selected(listNode,x)
           })      
           

        
        }
     


       
       
        
    
    }

}




function selected(list,x){
    let allList=list.querySelectorAll("section");
   
        let id=allList[x].id
        console.log("id movie:"+id)
        bringMovie(id);
    
      //  elementoDialog.showModal();
      
        dialog.showModal();
        dialog.style.display="";
        removeList();
    
}
   
/////////// brings the posible Titles//////////////////////////////

const getMovieList =async()=>{

    var title=document.getElementById("search").value
    
    
    if(title.length>=3){

    
    
    const options = {
        method: 'GET'
      
    };
   
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0b594805a17dec4e8de3882c93646258&query=${title}`,options)
        .then(response => response.json())
        .then(response =>getList(response.results))
        .catch(err => (console.log(err),removeList()));

   }else{
    removeList();
   }

}

///// delete list////////////////////

const removeList=()=>{

    var listNode=document.getElementById("list");
   
    while (listNode.firstChild) {
       listNode.removeChild(listNode.firstChild);
    }
}



export {getMovieList,getList}