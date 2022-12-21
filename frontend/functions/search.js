
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
      
        for(let x=0;x<=10;x++){
            listNode.style.display="block";
          var liNode=document.createElement("div");
            liNode.style.display="flex"
            liNode.className="item-list";
            var title=document.createElement("span");
            title.style.marginTop="59px";
            title.style.marginLeft="1%";
            if(array[x].title==undefined){
                title.innerText=array[x].name;
            
            }else{
                title.innerText=array[x].title;           
              
            }
            cardPath="http://www.themoviedb.org/t/p/w220_and_h330_face/";
         let card=createModalCard(array[x],"118px","118px", cardPath,false);
       
         liNode.id=array[x].id          
         liNode.appendChild(card);
            liNode.appendChild(title);
            listNode.appendChild(liNode);
            let allList=listNode.querySelectorAll("div");
           liNode.addEventListener("click",function(){
            let id=allList[x].id
            bringMovie(id);
        
          //  elementoDialog.showModal();
          
            dialog.showModal();
            dialog.style.display="";
            removeList();
         
           })

        
        }
     


       
       
        
    
    }

}

function selected(element){
    console.log(element)
    
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