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
    document.body.classList.add("drawer-open");
    document.querySelector("#contact-name").focus();
});
const drawerClose = document.querySelector(".drawer-close");

drawerClose.addEventListener("click", function () {
    contactDrawer.classList.remove("open");
    document.body.classList.remove("drawer-open");
});
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        contactDrawer.classList.remove("open");
        document.body.classList.remove("drawer-open");
    }
});
