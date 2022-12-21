

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
    let iContainter=document.getElementById("iframeContainer");
 
    for(let i=0;i<videos.length;i++){
       
            if(videos[i].type=="Trailer"){
            
                trailerId=videos[i].key
                i=videos.length;
                let iframe=document.getElementById("iframe");
                let iContainter=document.getElementById("iframeContainer");

                iframe.src="https://www.youtube.com/embed/"+trailerId;
                iContainter.style.display="flex"
            }

    }
   
    return trailerId

}


export   {bringTrailer,bringVideos} 