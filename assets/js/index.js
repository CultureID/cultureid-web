window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navlinks = document.querySelectorAll(".navbar-collapse > .navbar-nav > .nav-item > .nav-link");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white");
    navlinks.forEach((navlink) => {
      navlink.style.color = "#272727"
    })
  } else {
    navbar.classList.remove("bg-white");
    navbar.classList.add("transparent");
    navlinks.forEach((navlink) => {
      navlink.style.color = "white"
    })
  }
});
