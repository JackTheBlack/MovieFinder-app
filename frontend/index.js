import { getMostPopular,showMostPopular } from "./functions/popular.js";
import {getGenres} from "./functions/genres.js";  
//import {checkLogin} from "./functions/checkLog.js";
import {logOut} from "./functions/logOut.js";
import {getList,getMovieList} from "./functions/search.js"
import {bringMovie} from "./functions/modal.js";
import { bringTrailer } from "./functions/videos.js";
//checkLogin()


getGenres();
getMostPopular();
var modalButton=document.getElementById("modalButton");
var closeModal=document.getElementById("close");
var elementoDialog = document.getElementById("dialog")
var watchButton=document.getElementById("watchButton");
var columns=document.getElementById("columns");
var rows=document.getElementById("rows");
var value=document.getElementById("search");
var logout=document.getElementById("logout");
var cardContainer=document.getElementById("card-container-columns");
var allMovies=document.getElementById("showAll");
var movies3=document.getElementById("show3")
var c=3;
var long=false;


const showInColums=()=>{
    
    cardContainer.style.gridTemplateColumns ="auto auto auto";
    long=false;
    showMostPopular(c,long);

}


const showInRows=()=>{
    
    let card=document.getElementById("card");
    long=true;
    cardContainer.style.gridTemplateColumns ="auto";
    

    showMostPopular(c,long);
  }

  
value.addEventListener("keyup",getMovieList );
logout.addEventListener("click",logOut);

columns.addEventListener("click",showInColums);
rows.addEventListener("click",showInRows);


watchButton.addEventListener("click",function(){
    let id=sessionStorage.getItem("bannerId");
    bringMovie(id);

    elementoDialog.showModal();
    var dialog=document.getElementById("dialog");
    dialog.style.display="";
 
 
}, false);


closeModal.addEventListener("click",function(){
    elementoDialog.close();
    var dialog=document.getElementById("dialog");
    dialog.style.display="none";
 
});


modalButton.addEventListener("click",function(){
    let id =sessionStorage.getItem("modalId")
    let trailerId=bringTrailer(id)
    console.log(trailerId);
})

/// buttons the show all or 3 popular movies//////////////

allMovies.addEventListener("click",function(){
    c=20; 
    showMostPopular(c,long);
     allMovies.style.display="none";
    movies3.style.display="grid";} );

movies3.addEventListener("click",function(){
        c=3;
        showMostPopular(c,long);
        movies3.style.display="none";
       allMovies.style.display="grid";} );
   

      
