const hamburgerDiv = document.querySelector(".hamburger-div");
const hamburger = document.querySelectorAll(".hamburger");

const mobileNav = document.querySelector(".mobile-nav-wrapper");

const navContainer = document.querySelector(".nav-container");

window.addEventListener("click", (evt) => {
  if (hamburgerDiv.contains(evt.target)) {
    hamburgerDiv.classList.toggle("is-active");
    mobileNav.classList.toggle("active");
    navContainer.classList.toggle("open");
  }
});

const addTransition = () => {
  if (window.innerWidth <= 833) {
    mobileNav.style.transition = "all 0.3s ease";
  } else {
    mobileNav.style.transition = "none";
  }
};

window.addEventListener("resize", addTransition);
window.addEventListener("load", addTransition);

const footerTitleDiv = document.querySelectorAll(".footer-title-div");

footerTitleDiv.forEach((ftd) => {
  ftd.onclick = () => {
    let tagetSubmenu = ftd.nextElementSibling;
    let targetBtn = ftd.querySelector("span");
    tagetSubmenu.classList.toggle("is-active");
    targetBtn.classList.toggle("active");
  };
});
