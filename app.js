const menu = document.getElementsByClassName("menu")[0];

const menuContainer = document.getElementsByClassName("nav-link-container")[0];

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
  menuContainer.classList.toggle("open");
});
