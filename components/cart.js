
function verCarrito() {
//close nav while open cart
  const primaryNav = document.querySelector(".primary-navigation");
  const navToggle = document.querySelector(".mobile-nav-toggle");
  primaryNav.setAttribute("data-visible",false)
  navToggle.setAttribute("aria-expanded", false)    

// Get the modal
var modal = document.getElementById("dialog");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

  modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
}