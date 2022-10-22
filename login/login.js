
 function log(){

    let incorrect = document.getElementById('incorrect');
    let userField = document.querySelector('[name="uname"]');

    let user=document.querySelector('[name="uname"]').value;
    let pass=document.querySelector('[name="psw"]').value;

    let correctUser="admin";
    let correctPass="password";
    



    if(user == correctUser && pass==correctPass){
        document.location="./store.html";

    }else{
        
        document.querySelector('[name="psw"]').value=null

        incorrect.removeAttribute('hidden');
        userField.focus();

    }
}

var input = document.getElementById("psw");

// Execute a function when the user presses a key on the keyboard
document.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("log").click();
  }
}); 