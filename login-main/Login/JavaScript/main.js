

function Check() { 
  // var btn=document.querySelector(".btn");
// btn.addEventListener('click',usrcheck);
// btn.addEventListener('click',Password);

validateUserName();
Email()
}
function validateUserName(){
  
  var username=document.querySelector("#usrname").value;
  if ((username[0] === username[0].toUpperCase())  && username.length>6) {
    return true;
    }
  else{
   document.querySelector(".useralert").innerHTML="Username min 6 elementden ibaret olmali ve ilk herfi boyuk olmalidi!"
  }}

function Email()
  { console.log("ssssss")
     var password=document.querySelector("#pswrd").value
  var mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (mail.test(password))
    {
      return (true)
    }
    else
   {console.log("HI")
    document.querySelector(".mailalert").innerHTML="Email sehvdir!"
  // alert("ghfrh");
    return (false)
  }
  }



  
