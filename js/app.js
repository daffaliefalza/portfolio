// scroll reveals
ScrollReveal().reveal(".about__title", {
  delay: 700,
  origin: "top",
  distance: "80px",
});
ScrollReveal().reveal(".about__img-profile", {
  delay: 700,
  origin: "left",
  distance: "80px",
});

ScrollReveal().reveal(".about__description", {
  delay: 500,
  origin: "right",
  distance: "80px",
});

ScrollReveal().reveal(".skills__title", {
  delay: 700,
  origin: "top",
  distance: "80px",
});

ScrollReveal().reveal(".skills-list", {
  delay: 700,
  origin: "bottom",
  distance: "80px",
});

// ScrollReveal().reveal(".projects__title", {
//   delay: 700,
//   origin: "top",
//   distance: "80px",
// });

// ScrollReveal().reveal(".projects .grid-container", {
//   delay: 700,
//   origin: "bottom",
//   distance: "80px",
// });

const btnToggleTop = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (scrollY > "150") {
    btnToggleTop.classList.add("active");
  } else {
    btnToggleTop.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("exitPopup");
  const closePopup = document.getElementById("closePopup");

  const calculateTriggerZoneWidth = () => {
    const isMobile = window.innerWidth <= 768;
    return isMobile ? 150 : 500;
  };

  const showPopup = (e) => {
    const windowWidth = window.innerWidth;
    const triggerZoneWidth = calculateTriggerZoneWidth();

    if (e.clientY < 10 && e.clientX > windowWidth - triggerZoneWidth) {
      popup.classList.remove("hidden");
      document.removeEventListener("mouseleave", showPopup);
    }
  };

  closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  document.addEventListener("mouseleave", showPopup);

  window.addEventListener("resize", () => {
    calculateTriggerZoneWidth();
  });
});
