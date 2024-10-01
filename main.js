
 let name = prompt ("What is your name?")
   let time = parseInt (prompt("What time is it in your country"));
   var condition = prompt("Is it Am or Pm").toLowerCase();
   if (time >=8 && time <= 11  && condition === "am"){
      document.write( name +" "+"<br>" +"Good morning" +"<br>" + "May your day be filled with sunshine and success!")
   } else if( time === 12 && condition === "pm" ){
      document.write( name +" "+"<br>"+"<br>"+"Good afternoon"+"<br>"
      + "Wishing you a wonderful afternoon filled with productivity and positivity!" )
   }else if ( time >= 1 && time <= 5 && condition ==="pm"){
      document.write( name +" "+"<br>"+"Good afternooon"+
          "Wishing you a wonderful afternoon filled with productivity and positivity!")
   }  else if ( time >= 5 && time <= 9 && condition === " pm"){   
    document.write ( name +" " +"<br>" +"Good evening"+"<br>" +"Have a lovely evening, filled with relaxation and joy!") 
} else if(time >=9 && time <= 12 &&  condition === "pm"){
         document.write (  name +" "+"<br>"+"Good night"+"<br>"+ "May you have sweet dreams and restful sleep!")
} else if( time === 12 && condition === "am" ){
   document.write( name +" "+"<br>"+"Go to sleep"+"<br>"+"Good night! May you have sweet dreams and restful sleep!")
}else if ( time >= 1 && time <= 7 && condition ==="am"){
   document.write( name +" "+"<br>"+"Go to sleep"+"<br>"+"Good night! May you have sweet dreams and restful sleep!")
}else {
   document.write ( name +"  " +"<br>"+"Invalid time try to use 12 h format")
}



