import { movieGenre } from "./genres.js";
import {createCard} from "./card.js";
import {getStars} from "./stars.js"

let divContainer=document.getElementById("card-container-columns");
let watchButton=document.getElementById("watchButton");
const getMostPopular=async()=>{
  
    const options = {
        method: 'GET'
      
    }; 
   
    await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0b594805a17dec4e8de3882c93646258`,options)
        .then(response => response.json())
        .then(response =>(theMostPopular(response.results[0]),
                        window.sessionStorage.setItem("movies",JSON.stringify(response.results)),
                        showMostPopular(3)
                        ))
        .catch(err => (console.log(err)));


}


const showMostPopular=(columns,long)=>{

    var cardPath;
    var width;
    var height;
  
    if (long){
        cardPath="https://www.themoviedb.org/t/p/w780/";
        divContainer.style.paddingLeft="25%";
        width="710px";
        height="310px";
   
    }else{
        cardPath="http://www.themoviedb.org/t/p/w220_and_h330_face/";
       
        width="225px";
        height="310px";
    }

  
    
   
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild);
     }
let movies=JSON.parse(window.sessionStorage.getItem("movies"))
let createCards= movies.map(function(element,index){
    
   if ((index>0)&&(index<=columns)){
    let card=createCard(element,width,height, cardPath,long);
    divContainer.appendChild(card);  
    
   }
     

  })




}

const theMostPopular=(mp)=>{

    const posterPath="https://image.tmdb.org/t/p/original/";
   
    var banner=document.getElementById("banner");
    var overview=document.getElementById("overview");
    banner.style.backgroundImage=`url(${posterPath+mp.backdrop_path})  `;
    let title=document.getElementById("title");
    title.innerText=mp.title;
    getStars("starContainer",mp.vote_average);
    overview.innerText=mp.overview;
    let gendres= movieGenre(mp.genre_ids);
    let gendre=document.getElementById("genre");
    gendre.innerText=gendres[0];
    sessionStorage.setItem("bannerId",JSON.stringify(mp.id))
}




export {getMostPopular,showMostPopular};