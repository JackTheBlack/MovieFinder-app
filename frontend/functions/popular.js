import { movieGenre } from "./genres.js";
import {createCard} from "./card.js";


let divContainer=document.getElementById("card-container-columns");

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
        divContainer.style.paddingLeft="15%";
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
    console.log(mp);
    var banner=document.getElementById("banner");
    var overview=document.getElementById("overview");
    banner.style.backgroundImage=`url(${posterPath+mp.backdrop_path})  `;
    let title=document.getElementById("title");
    title.innerText=mp.title;
    overview.innerText=mp.overview;
    let gendres= movieGenre(mp.genre_ids);
    let gendre=document.getElementById("genre");
    gendre.innerText=gendres[0];
    

}




export {getMostPopular,showMostPopular};