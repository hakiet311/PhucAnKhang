"use strict";
const sections = document.querySelectorAll(".section");
const animations = document.querySelectorAll(".animation");
const navigationBar = document.querySelector(".navigation_bar");

const observerSection = new IntersectionObserver(
  (entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("landing_page");
        observe.unobserve(entry.target);

        navigationBar.classList.add("fix_navigation");
      }
    });
  },
  { threshold: 0.1, root: null }
);

sections.forEach((section) => {
  section.classList.add("landing_page");
  observerSection.observe(section);
});

const observerAnimation = new IntersectionObserver(
  (entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animation_moveFromLeft");
        observe.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animations.forEach((animation) => {
  observerAnimation.observe(animation);
});
