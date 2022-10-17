function verCarrito() {
  const primaryNav = document.querySelector(".primary-navigation");
  const navToggle = document.querySelector(".mobile-nav-toggle");
  primaryNav.setAttribute("data-visible", false)
  navToggle.setAttribute("aria-expanded", false)

  //Abre el dialogo que contiene el carrito
  var modal = document.getElementById("dialog");

  //Cierra el dialogo
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
  }

  // Cierra si se da click afuera
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}