 

 const getSimilar=async(id)=>{


    
    const options = {
        method: 'GET'
      
    }; 
   
    await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=0b594805a17dec4e8de3882c93646258&language=en-US&page=1`,options)
        .then(response => response.json())
        .then(response =>(console.log(response),fillModal(response)
                        ))
        .catch(err => (console.log(err)));

   
 }

 const modalCards=()=>{
    
 }