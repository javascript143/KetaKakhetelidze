const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
  setTimeout(() => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
  }, 500);
});

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
         elements[i].addEventListener(eventType, callback);
    }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function () {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
        header.classList.add("active");
        hideHeader();
    } else {
        header.classList.remove("active");
    }
});

// SIGN IN / SIGN OUT
const signInNavItem = document.querySelector(".nav-signin");
const signOutNavItem = document.querySelector(".nav-signout");
const signoutBtn = document.querySelector(".signout-btn");
let currentUser = localStorage.getItem('user');

const userEmail = document.querySelector(".user-email");

if (currentUser) {
    signInNavItem.classList.add("hidden");
    signOutNavItem.classList.remove("hidden");

    userEmail.textContent = JSON.parse(currentUser).email;
}

signoutBtn.addEventListener("click", () => {
    localStorage.removeItem('user');
    signInNavItem.classList.remove("hidden");
    signOutNavItem.classList.add("hidden");
});