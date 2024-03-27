const menuBtn = document.querySelector(".mobile-menu-btn");
const navBar = document.getElementById('navbar');

menuBtn.addEventListener("click", () => {
  const icon = document.querySelector(".mobile-menu-btn img");
  menuBtn.classList.toggle("active-btn");
  navBar.classList.toggle("active-menu"); 

  if (menuBtn.classList.contains("active-btn")) {
    icon.src = "./img/icon-close.svg";
  } else {
    icon.src = "./img/icon-hamburger.svg";
  }
});