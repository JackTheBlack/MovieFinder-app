 import { createModalCard } from "./card.js";

 const getSimilar=async(id)=>{


    
    const options = {
        method: 'GET'
      
    }; 
   
    await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=0b594805a17dec4e8de3882c93646258&language=en-US&page=1`,options)
        .then(response => response.json())
        .then(response =>(console.log(response.results), modalCards(response.results) 
                        ))
        .catch(err => (console.log(err)));

   
 }

 const modalCards=(movies)=>{

    var cardPath;
    var width;
    var height;
    let cardModalContainer=document.getElementById("cardModalContainer");
  
        cardPath="http://www.themoviedb.org/t/p/w220_and_h330_face/";
      
        width="118px";
        height="118px";
 
  
    
   
    while (cardModalContainer.firstChild) {
        cardModalContainer.removeChild(cardModalContainer.firstChild);
     }
let createCards= movies.map(function(element,index){
    
   if ((index>0)&&(index<=3)){
    let card=createModalCard(element,width,height, cardPath,false);
   cardModalContainer.appendChild(card);  
    
   }
     

  })

}


export {getSimilar}