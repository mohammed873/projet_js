
function btn(){
    var side = document.getElementById('menu-r');
    side.style.right = 0;
    side.style.transition = "all.8s ease-in-out";
}
function btn2(){
    var side = document.getElementById('menu-r');
    side.style.right = "54%";
    side.style.transition = "all.8s ease-in-out";
}

// function btn() {
//     var side = document.getElementById('menu-r');
//     side.classList.toggle('menu-bar-responsive');
// }

  
  
  function validmail(){
  var mail = document.getElementById("gmail").value;
  var error = document.getElementById("error-mail");
  var text;
  
  if (!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    text = "invalid mail";
    error.style.color = "red";
    error.innerHTML = text;
    return false;
  }
  else{
    text = "valid mail"
    error.style.color = "#008000";
    error.innerHTML = text;
  
   return true;
   }
  }
  

  
  function validmailD(){
    var mail = document.getElementById("gmailD").value;
    var error = document.getElementById("error-mailD");
    var text;
    
    if (!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      text = "invalid mail";
      error.style.color = "red";
      error.style.display = 'initial';
      error.innerHTML = text;
      return false;
    }
    else{
      text = "valid mail"
      error.style.color = "#008000";
      error.innerHTML = text;
    
     return true;
     }
    }
  
 
    function validpasswordD(){
      var password = document.getElementById("passwordD").value;
      var error = document.getElementById("error-passwordD");
      var text;
      
      if (!password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
        text = "invalid password";
        error.style.color = "red";
        error.style.display = 'initial';
        error.innerHTML = text;
        return false;
      }
      else{
       text = "valid password"
       error.style.color = "#008000";
       error.innerHTML = text;
      
       return true;
       }
    
      }

    function clear(){
      document.getElementById("passwordD").value = '';
      document.getElementById("error-passwordD").style.display = 'none';
      document.getElementById("gmailD").value = '';
      document.getElementById("error-mailD").style.display = 'none';
      document.getElementById("password").value = '';
      document.getElementById("error-password").value = '';
      document.getElementById("gmail").value = '';
      document.getElementById("error-mail").value = '';    
    }


      function validpassword(){
        var passwords = document.getElementById("password").value;
        var errors = document.getElementById("error-password");
        var text;
        
        if (!passwords.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
          text = "invalid password";
          errors.style.color = "red";
          errors.innerHTML = text;
          return false;
        }
        else{
         text = "valid password"
         errors.style.color = "#008000";
         errors.innerHTML = text;
        
        
         return true;
         }
        }
      
  

  //validation
  function validation(){
  if(!validmailD() == true){
     alert("please check ur information again");
  }
 
  else if (!validpasswordD() == true) {
    alert("please check ur information again");
  }

  else{
    alert("you have log in successfully ");
    clear();
  }
  
  }


  function validationMobile() {
    if (!validmail() == true){
      alert("please check ur information again");
    }
    else if (!validpassword() == true) {
      alert("please check ur information again");
    }
    else{
      alert("you have logged in successfully ");
      clear();
    }
  
  }
  //end validation///////////



  //////////////////////////////////COMMENT-VALIDATION/////////////////////////////////////////

  

  function validmailF(){
    var mail = document.getElementById("email1").value;
    var error = document.getElementById("error-mailF");
    var text;
    
    if (!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      text = "✘";
      error.style.color = "red";
      error.innerHTML = text;
      return false;
    }
    else{
      text = "✔"
      error.style.color = "#008000";
      error.innerHTML = text;
      return true;
     }
    }
  
  
  function validcomment(){
    var comment = document.getElementById("comment").value;
    var error = document.getElementById("error-commentF");
    var text;

    if (comment.length < 10){
      text = "✘";
      error.style.color = "red";
      error.innerHTML = text;
      return false;
    }
    else{
      text = "✔"
      error.style.color = "#008000";
      error.innerHTML = text;
      return true;
     }
  }
  
 

  function validationF(){
    if((!validcomment() == true) || (!validmailF() == true) ){
      alert("please check your information ");
    
    }
    else{
      alert("your feedback has successfuly sent");
    }
  }




  //////////////////////////////////////slide part////////////////////////////////////////////
  

  var slide = new Array("pictures/pic2.jpg", "pictures/pic6.jpg", "pictures/pic4.jpg", );
  var numero = 0;

  function ChangeSlide(sens) {
      numero = numero + sens;
      if (numero < 0){
          numero = slide.length - 1;
      }
      if (numero > slide.length - 1){
          numero = 0;
      }
      document.getElementById("slide").src = slide[numero];  
  }


  ///////////////////////////////RESERVATION PART///////////////////////////////////////


  function checkPrice1(){
    var s = document.getElementById("duration").value;
    var x = document.getElementById("choice").value;
    var timeprice = document.getElementById("price-times");
    var carprice = document.getElementById("price1");
    var total = document.getElementById("price3");
    var priceHour;
    var priceCar;
    if(s === "1 HOUR"){
        priceHour = 100;
        priceHour.toString();
        timeprice.innerHTML = priceHour + " DH";
    }
    if (s === "4 HOUR"){
        priceHour = 200;
        priceHour.toString();
        timeprice.innerHTML = priceHour + " DH";
    }
    if(s === "6 HOUR"){
        priceHour = 300;
        priceHour.toString();
        timeprice.innerHTML = priceHour + " DH";
    }
   
    if(x === "AUDI A1"){
        priceCar = 300;
        priceCar.toString();
        carprice.innerHTML = priceCar + " DH";
    }
    if(x === "AUDI A2"){
        priceCar = 400;
        priceCar.toString();
        carprice.innerHTML = priceCar + " DH";
    }
    if(x === "AUDI A3"){
        priceCar = 600;
        priceCar.toString();
        carprice.innerHTML = priceCar + " DH";
    }
   var t  = priceCar + priceHour ;
   total.innerHTML ="The Total price is " + t + " DH";
}



function checkPrice2(){
    var totalprice =document.getElementById("price3");
   var totalprice =  checkPrice.value +  checkPrice1.value;
   alert(totalprice);
}


  function validmailR(){
    var mail = document.getElementById("Email-resere").value;
    var error = document.getElementById("eroo");
    var text;
    
    if (!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      text = "invalid mail";
      error.style.color = "red";
      error.style.fontSize = '17px';
      error.style.display = 'initial';
      error.innerHTML = text;
      return false;
    }
    else{
      text = "valid mail"
      error.style.color = "#008000";
      error.style.fontSize = '17px';
      error.innerHTML = text;
    
     return true;
     }
    }

    function validmailRP(){
    var phone = document.getElementById("phone-number").value;
    var error = document.getElementById("eroo1");
    var text;
    
    if (!phone.match(/(?=.*(06|07|05))[0-9]{10}/)){
      text = "invalid number";
      error.style.color = "red";
      error.style.fontSize = '17px';
      error.style.display = 'initial';
      error.innerHTML = text;
      return false;
    }
    
      text = "valid number";
      error.style.color = "#008000";
      error.style.fontSize = '17px';
      error.innerHTML = text;
     
    
     return true;
     
    }


    function validationR(){
      
        
    }
    function validCar(){
      
      var car = document.getElementById("choice").value;
      var time = document.getElementById("duration").value;
    
  
     if(time === "TIME DURATION" || car === "CHOOSE YOUR CAR" ||(validmailRP() == false) || (validmailR() == false)){
       alert("please cheack your information");
     }
     else{
       alert("you Car have reserved successfully");
     }
    }





////////////////////////////////////////////SIGN-UP-PART/////////////////////////////////////////

    
function validfullname(){
  var name = document.getElementById("full-name").value;
  var error = document.getElementById("erooo1");

  if(!name.match(/^[A-Z ]{10}/ )){
      text = "unvalid name"
      error.innerHTML = text;
      error.style.color = "red";
      return false;
  }
  else{
      text = "valid Name"
      error.style.color = "#008000";
      error.innerHTML = text;

  return true;
  }
}


function validmailS(){
var mailS = document.getElementById("emailS").value;
var error = document.getElementById("erooo2");
var text;

if (!mailS.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  text = "invalid mail";
  error.style.color = "red";
  error.innerHTML = text;
  return false;
}
else{

  text = "valid mail"
  error.style.color = "#008000";
  error.innerHTML = text;

 return true;
 }
}


  function validpasswordS(){
    var passwordS = document.getElementById("passwordS1").value;
    var error = document.getElementById("erooo3");
    var text;
    
    if (!passwordS.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
      text = "invalid password";
      error.style.color = "red";
      error.innerHTML = text;
      return false;
    }
    else{
     text = "valid password"
     error.style.color = "#008000";
     error.innerHTML = text;
    
     return true;
     }
  
    }


    function revalidpassword(){
      var password = document.getElementById("passwordS1").value;
      var password2 = document.getElementById("passwordS2").value;
      var error = document.getElementById("erooo4");


      if(password2 != password){
        text = "invalid password";
        error.style.color = "red";
        error.innerHTML = text;
        return false;
      }
      else{
        text = "valid password"
        error.style.color = "#008000";
        error.innerHTML = text;

        return true;
       
      }
  }


function validationS(){
  var showme = document.getElementById("mirror");
  var name = document.getElementById("full-name").value;
  var passwordS = document.getElementById("passwordS1").value;
  var mailS = document.getElementById("emailS").value;
  var show = document.getElementById("show1");
  var mailSC = document.getElementById("show2");
  var passwordSC = document.getElementById("show3");

  if( validfullname() == false || validmailS() == false || validpasswordS() == false || revalidpassword() == false ){
    alert("please check your information");

  }
  else{
    alert("A pop window will soon apear please confirm your information");
    showme.style.bottom = "45px";
    showme.style.transition = "all.9s ease-in-out";
    show.innerHTML = name ;
    mailSC.innerHTML = mailS ;
    passwordSC.innerHTML = passwordS;
   
  }
}




//////////////////////////////////HIDING THE SHOWME DIV


function hideshowme(){
  alert("Your Inforamtion is confirmed , You are Signed up")
  var showme = document.getElementById("mirror");
  showme.style.bottom = "338px";
  showme.style.transition = "all.9s ease-in-out";

}
