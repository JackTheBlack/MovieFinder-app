

var dialog=document.getElementById("modalContent");
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


const fillModal=(movie)=>{
  let  cardPath="http://image.tmdb.org/t/p/w1280/";
    console.log("estoy aqui")
    modalBanner.src=`${cardPath+movie.backdrop_path}`; 

    modalBanner.style.position="absolute"
    modalBanner.style.left="0%"
    modalBanner.style.top="0%"
    modalBanner.style.width="1240px"
    modalBanner.style.height="440px"
 //   modalBanner.style.backgroundRepeat ="no-repeat";
   // dialog.appendChild(modalBanner);
dialog.style.background= ` linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${cardPath+movie.backdrop_path})`; 
dialog.style.backgroundPosition="100% 40%";
dialog.style.backgroundSize="cover";
}

export {bringMovie}