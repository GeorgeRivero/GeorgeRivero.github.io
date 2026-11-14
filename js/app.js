"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const navLinks = mainNav.querySelectorAll("a");

menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");
    const isOpen = mainNav.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
const contactTrigger = document.querySelector(".contact-trigger");
const contactDrawer = document.querySelector("#contact-drawer");

contactTrigger.addEventListener("click", function (event) {
    event.preventDefault();
    contactDrawer.classList.add("open");
});