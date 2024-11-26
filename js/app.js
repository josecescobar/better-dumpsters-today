// app.js

document.addEventListener("DOMContentLoaded", () => {
    // Handle form submission event
    const form = document.querySelector("#contact form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Thank you for scheduling with Better Dumpsters Today! We will contact you soon.");
            form.reset();
        });
    }

    // Mobile Menu Toggle (optional enhancement for a better UX)
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});
