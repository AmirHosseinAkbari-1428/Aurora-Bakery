const navOpen = document.querySelector(".nav__toggle-icon");
const menuOpen = document.querySelector(".mobile-nav-menu");

navOpen.addEventListener("click", function () {
    this.classList.toggle("nav__toggle-icon--active")
    menuOpen.classList.toggle("nav__toggle-menu--show")
})