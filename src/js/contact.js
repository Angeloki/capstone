import '../scss/styles.scss'

function validate(event){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name===""){
      text = "Please Enter valid Name";
      error_message.textContent = text;
      event.preventDefault();
      return false;
    }
    if(subject===""){
      text = "Please Enter Correct Subject";
      error_message.textContent = text;
      event.preventDefault();
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.textContent = text;
      event.preventDefault();
      return false;
    }
    if(email.indexOf("@") == -1 || email===""){
      text = "Please Enter valid Email";
      error_message.textContent = text;
      event.preventDefault();
      return false;
    }
    if(message ===""){
      text = "Please Enter Message";
      error_message.textContent = text;
      event.preventDefault();
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
window.addEventListener("submit",validate)