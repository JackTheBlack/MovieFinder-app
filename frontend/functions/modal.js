

var dialog=document.getElementById("modalBanner");
var modalBanner=document.createElement("img");


const bringMovie=async(id)=>{

    const options = {
        method: 'GET'
      
    }; 
   
    await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0b594805a17dec4e8de3882c93646258&language=en-US`,options)
        .then(response => response.json())
        .then(response =>(console.log(response),fillModal(response)
                        ))
        .catch(err => (console.log(err)));

   

}

const modalBannerContent=(movie)=>{

  let title=document.getElementById("modalTitle");
  let button=document.getElementById("modalButton")
title.innerText=movie.title;
 


}


const fillModal=(movie)=>{
  let  cardPath="http://image.tmdb.org/t/p/w1280/";

 let overview=document.getElementById("modalOverview");
 //   modalBanner.style.backgroundRepeat ="no-repeat";
   // dialog.appendChild(modalBanner);
dialog.style.background= ` linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${cardPath+movie.backdrop_path})`; 
dialog.style.backgroundPosition="100% 25%";
dialog.style.backgroundSize="cover";
modalBannerContent(movie);
overview.innerText=movie.status;

}

export {bringMovie}