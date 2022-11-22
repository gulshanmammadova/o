let lazy=document.getElementById("photo")
var left=0
var topPx=0
var right=0
let bottomPx=0
let home=document.getElementById("circle");
document.body.onkeydown=(e)=>{
  
        if (e.keyCode === 40) {
          
            topPx += 5;
            console.log(topPx);
    
            lazy.style.top = `${topPx}%`;  
          }
          if (e.keyCode === 39) {
     
            left += 5;
            console.log(left);
            lazy.style.left = `${left}%`;   
         }
         if(lazy.style.top==="50%" && lazy.style.left==="50%"){
          var paragraph = document.getElementById("winner");
        paragraph.innerText = "Qazandiniz!!!";
        
        }
           
}



// if (e.keyCode === 37) {
//   console.log(right)
//      right += 5;
//      console.log(right);
//      lazy.style.right = `${right}%`;   
//   }
// if (e.keyCode === 38) {
              
//   bottomPx += 5;
  

//    lazy.style.bottomPx = `${bottomPx}%`;  
//  }