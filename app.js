const hamburgerDiv = document.querySelector(".hamburger-div");
const hamburger = document.querySelectorAll(".hamburger");

const mobileNav = document.querySelector(".mobile-nav-wrapper");

const navContainer = document.querySelector(".nav-container");

const basket = document.querySelector("#basket");

window.addEventListener("click", (evt) => {
  if (hamburgerDiv.contains(evt.target)) {
    hamburgerDiv.classList.toggle("is-active");
    mobileNav.classList.toggle("active");
    navContainer.classList.toggle("open");
    basket.classList.toggle("open");
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

// footer accordion menu

const footerTitleDiv = document.querySelectorAll(".footer-title-div");

footerTitleDiv.forEach((ftd) => {
  let toggle = false;
  ftd.onclick = () => {
    toggle = !toggle;
    let targetSubmenu = ftd.nextElementSibling;
    let targetBtn = ftd.querySelector("span");
    if (toggle) {
      targetSubmenu.style.display = "block";
      targetBtn.classList.toggle("active");
      setTimeout(() => {
        targetSubmenu.classList.toggle("is-active");
      }, 0.2);
    } else {
      targetSubmenu.classList.toggle("is-active");
      targetBtn.classList.toggle("active");
      setTimeout(() => {
        targetSubmenu.style.display = "none";
      }, 200);
    }
  };
});
