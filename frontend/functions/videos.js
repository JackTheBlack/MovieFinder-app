

const bringVideos=async(id)=>{

    const options = {
        method: 'GET'
      
    }; 
     var list;   

    await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=0b594805a17dec4e8de3882c93646258&language=en-US`,options)
        .then(response => response.json())
        .then(response =>(   sessionStorage.setItem("videosRelated",JSON.stringify(response.results))
                        ))
        .catch(err => (console.log(err)));

   return list;

}


const bringTrailer=(id)=>{


    var videos=JSON.parse(sessionStorage.getItem("videosRelated"))
    var trailerId;
    console.log(videos)
    for(let i=0;i<videos.length;i++){
       
            if(videos[i].type=="Trailer"){
            
                trailerId=videos[i].key
                i=videos.length;
            }

    }
    return trailerId

}


export   {bringTrailer,bringVideos} 