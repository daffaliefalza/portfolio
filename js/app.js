// scroll reveals
ScrollReveal().reveal(".about__title", {
  delay: 700,
  origin: "top",
  distance: "50px",
});
ScrollReveal().reveal(".about__img-profile", {
  delay: 700,
  origin: "left",
  distance: "50px",
});

ScrollReveal().reveal(".about__description", {
  delay: 500,
  origin: "right",
  distance: "50px",
});

ScrollReveal().reveal(".skills__title", {
  delay: 700,
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal(".skills-list", {
  delay: 700,
  origin: "bottom",
  distance: "50px",
});

ScrollReveal().reveal(".projects__title", {
  delay: 700,
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal(".projects .grid-container", {
  delay: 700,
  origin: "bottom",
  distance: "50px",
});

const btnToggleTop = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (scrollY > "150") {
    btnToggleTop.classList.add("active");
  } else {
    btnToggleTop.classList.remove("active");
  }
});
