import { bringVideos } from "./videos.js";
import { getSimilar } from "./similar.js";
import { formatDate } from "./dateFormat.js";


var dialog=document.getElementById("modalBanner");
var modalBanner=document.createElement("img");


const bringMovie=async(id)=>{
console.log("id:"+id)
    const options = {
        method: 'GET'
      
    }; 
   
    await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0b594805a17dec4e8de3882c93646258&language=en-US`,options)
        .then(response => response.json())
        .then(response =>(console.log(response),fillModal(response)
                        ))
        .catch(err => (console.log(err)));

   bringVideos(id);     
   sessionStorage.setItem("modalId",id);
    
}

const modalBannerContent=(movie)=>{

  let title=document.getElementById("modalTitle");
  let button=document.getElementById("modalButton")
title.innerText=movie.title;
 


}


const fillModal=(movie)=>{
  let  cardPath="http://image.tmdb.org/t/p/w1280/";
  let date=document.getElementById("date");
  let languaje=document.getElementById("languaje");
  let genero=document.getElementById("genero");
 let overview=document.getElementById("modalOverview");
 let popularity=document.getElementById("popularity");
dialog.style.background= ` linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${cardPath+movie.backdrop_path})`; 
dialog.style.backgroundPosition="100% 25%";
dialog.style.backgroundSize="cover";
overview.innerText=movie.overview;
date.innerText=formatDate(movie.release_date);
genero.innerText=movie.genres[0].name;
languaje.innerText=movie.spoken_languages[0].english_name;
popularity.innerText=(movie.vote_average/2)+" / 5";

console.log(movie.genres[0].name);
modalBannerContent(movie);
getSimilar(movie.id)


}

export {bringMovie}