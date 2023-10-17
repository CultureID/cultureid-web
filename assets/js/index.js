window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navlinks = document.querySelectorAll(".navbar-collapse > .navbar-nav > .nav-item > .nav-link");
  if (window.scrollY > 180) {
    navbar.classList.add("bg-white", "shadow-sm");
    navlinks.forEach((navlink) => {
      navlink.style.color = "#272727"
    })
  } else {
    navbar.classList.remove("bg-white", "shadow-sm");
    navbar.classList.add("transparent");
    navlinks.forEach((navlink) => {
      navlink.style.color = "white"
    })
  }
});
