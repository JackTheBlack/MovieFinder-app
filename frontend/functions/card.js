
import {cutOverview} from "./cutOverview.js";
import {getStars} from "./stars.js"

const createCard=(element,width,height, cardPath,long)=>{


  var starsContainer=document.createElement("div");
    starsContainer.id="cardStarContainer";
    starsContainer.className="star-container"
  var cardContent=document.createElement("DIV");
    var card=document.createElement("DIV");
  var cardShadow=document.createElement("DIV");
    cardShadow.style.width=width;
    cardShadow.style.height=height;
  
  cardShadow.style.background="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)";
  cardShadow.className="card-shadow";



    if(long){
      cardContent.style.marginTop="30%";
    }
    card.style.width=width;
    card.style.height=height;
    var title=document.createElement("DIV");
    title.className="card-title"
    var overview=document.createElement("DIV");
    overview.className="card-overview";
    overview.innerText=cutOverview(element.overview);
    title.innerText=element.title;

   
   card.style.backgroundImage=`url(${cardPath+element.backdrop_path})`; 
   card.style.backgroundRepeat ="no-repeat";
   card.className="card";
   card.id="card"; 
   
   for(let x=0;x<=element.vote_average/2;x++){
    let star=document.createElement("DIV");
    star.className="star";
    starsContainer.appendChild(star);

}



   cardContent.className="card-content";
   cardContent.id="cardContent";
  
   cardContent.appendChild(title);
   cardContent.appendChild(starsContainer);    
  cardContent.appendChild(overview);
  cardShadow.appendChild(cardContent);
   card.appendChild(cardShadow);


   
  

  return card;

}

export {createCard}