
var listNode=document.getElementById("list");



//////////////////  Create the list/////////////////
const getList=(array)=>{


    listNode.innerHTML=''
    if(array.length>=3){
      
        for(let x=0;x<=10;x++){
            listNode.style.display="block";
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
   
/////////// brings the posible Titles//////////////////////////////

const getMovieList =async()=>{

    var title=document.getElementById("search").value
    
    
    if(title.length>=3){

    
    
    const options = {
        method: 'GET'
      
    };
   
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0b594805a17dec4e8de3882c93646258&query=${title}`,options)
        .then(response => response.json())
        .then(response =>getList(response.results))
        .catch(err => (console.log(err),removeList()));

   }else{
    removeList();
   }

}

///// delete list////////////////////

const removeList=()=>{

    var listNode=document.getElementById("list");
   
    while (listNode.firstChild) {
       listNode.removeChild(listNode.firstChild);
    }
}



export {getMovieList,getList}