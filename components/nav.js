
//Esconder navegacion con el scroll
const navHidden = document.querySelector(".nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", (e) => {
    if (lastScrollY < window.scrollY) {
        navHidden.classList.add("nav--hidden")


    } else {
        navHidden.classList.remove("nav--hidden")

    }
    lastScrollY = window.scrollY
})

//Mostrar/esconder navegacion movil 
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", (e) => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
        
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }
})

