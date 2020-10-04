const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const menu = document.getElementsByClassName("menu")[0];

  const menuContainer = document.getElementsByClassName(
    "nav-link-container"
  )[0];

  menu.classList.toggle("open-menu");
  menuContainer.classList.toggle("open");

  if (hamburgerIcon.classList.contains("fa-bars")) {
    hamburgerIcon.classList.replace("fa-bars", "fa-times");
  } else {
    hamburgerIcon.classList.replace("fa-times", "fa-bars");

    hamburger.href = window.location.href;
  }
});
