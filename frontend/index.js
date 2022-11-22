

var value=document.getElementById("search");




const getList=(array)=>{




        var listNode=document.getElementById("list");

    listNode.innerHTML=''
    if(array=>1){
        for(x=0;x<=10;x++){
            var liNode=document.createElement("LI");
            if(array[x].title==undefined){
                var title=document.createTextNode(array[x].name);
            }else{
                var title=document.createTextNode(array[x].title);
            
            }
            
            liNode.onclick=function(){alert("hola mundo");};
            liNode.appendChild(title);
            listNode.appendChild(liNode);
            
    
        }
    }


}
   
      
  
   

const removeList=()=>{
    var listNode=document.getElementById("list");
   
    while (listNode.firstChild) {
       listNode.removeChild(listNode.firstChild);
    }
}







const getMovieList =async()=>{

    var title=document.getElementById("search").value
  
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8f5c9e43f6mshf5f2719ae40093cp177378jsnc6326b4dacc5',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    
    await fetch(`https://imdb8.p.rapidapi.com/title/find?q=${title}`, options)
        .then(response => response.json())
        .then(response =>getList(response.results))
        .catch(err => (removeList()));


   

}


  
value.addEventListener("keyup",getMovieList )
  
      
