document.addEventListener("DOMContentLoaded", function () {
    var hamburger = document.getElementById("hamburger");
    var navList = document.getElementById("nav-list");

    hamburger.addEventListener("click", function () {
      navList.classList.toggle("show");
    });
  });