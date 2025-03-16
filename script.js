"use strict";
const sections = document.querySelectorAll(".section");
const animations = document.querySelectorAll(".animation");
const navigationBar = document.querySelector(".navigation_bar");
const btnLienHes = document.querySelectorAll(".btn_lienhe");
const btnClosePopUp = document.querySelector(".btn_close_popup");
const popUp = document.querySelector(".popup_container");
const btnMenuMobie = document.querySelector(".btn_menu");
const btnCloseSlide = document.querySelector(".btn-slide");
const navLinkSlide = document.querySelectorAll(
  ".nav_link_slide .nav_link_list"
);

const navLinks = document.querySelector(".nav_link");

const btnExplore = document.querySelector(".btn_explore");

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
  { threshold: 0.1 }
);

animations.forEach((animation) => {
  observerAnimation.observe(animation);
});

btnLienHes.forEach((btnLienHe) => {
  btnLienHe.addEventListener("click", () => {
    popUp.classList.add("popup_container__show");
  });
});

btnClosePopUp.addEventListener("click", () => {
  popUp.classList.remove("popup_container__show");
});

btnExplore.addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector(".section_about")
    .scrollIntoView({ behavior: "smooth" });
});

//
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav_link_list")) {
    const getHref = e.target.getAttribute("href");
    if (!getHref) return;
    document.querySelector(getHref).scrollIntoView({ behavior: "smooth" });
  }
});

const handleHoverNav = function (e, opacity) {
  const slibings = document.querySelectorAll(".nav_link_list");
  if (e.target.classList.contains("nav_link_list")) {
    slibings.forEach((sli) => {
      if (sli !== e.target) {
        sli.style.opacity = opacity;
      }
    });
  }
};
navLinks.addEventListener("mouseover", (e) => handleHoverNav(e, 0.2));
navLinks.addEventListener("mouseout", (e) => handleHoverNav(e, 1));

const navMobile = document.querySelector(".navigationM_contaniner");
btnMenuMobie.addEventListener("click", () => {
  navMobile.classList.add("show_navigationM");
});

btnCloseSlide.addEventListener("click", () => {
  navMobile.classList.remove("show_navigationM");
});

navLinkSlide.forEach((item) => {
  item.addEventListener("click", () => {
    navMobile.classList.remove("show_navigationM");
  });
});
