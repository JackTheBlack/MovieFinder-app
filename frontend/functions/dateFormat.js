const formatDate=(date)=>{

    const months=["January","Febrary","March","April","May", "June","July","August","September","October","November","December"];

    var monthName;
   var monthNumber=date[5]+date[6];

   for (let i=0;i<=11;i++){
    
    if(monthNumber==(i+1)){
       
        monthName=months[i];
    }

   }

var returnDate=date[8]+date[9]+" "+" "+monthName+", "+date[0]+date[1]+date[2]+date[3]

return(returnDate)
}


export{formatDate}