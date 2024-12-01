document.addEventListener("DOMContentLoaded", () => {
    // Handle contact form submission
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Thank you for scheduling with Better Dumpsters Today! We will contact you soon.");
            contactForm.reset();
        });
    }

    // Handle quote form modal
    const modal = document.getElementById('quoteForm');
    const btn = document.querySelector('.cta-button');
    const closeBtn = document.querySelector('.modal .close');

    if (modal && btn && closeBtn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }

        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

    // Active Navigation
    const current = window.location.href;
    const menuItems = document.querySelectorAll('.nav-link');
    menuItems.forEach(link => {
        if (link.href === current) {
            link.classList.add('active');
        }
    });

    // Smooth Scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle quote form submission (if on contact page)
    const quoteForm = document.querySelector("#quoteForm form");
    if (quoteForm) {
        quoteForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Thank you for requesting a quote! We will get back to you shortly.");
            quoteForm.reset();
            modal.style.display = "none"; // Close modal after submission
        });
    }
});