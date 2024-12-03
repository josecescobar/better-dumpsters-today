document.addEventListener("DOMContentLoaded", () => {
    // Handle contact form submission
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            // Basic validation for empty fields
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            if (name && email && phone) {
                alert("Thank you for scheduling with Better Dumpsters Today! We will contact you soon.");
                contactForm.reset();
            } else {
                alert("Please fill in all required fields.");
            }
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

        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape" && modal.style.display === "block") {
                modal.style.display = "none";
            }
        });
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

    // Service Price Calculator
    const calculateServicePrice = () => {
        const size = document.getElementById('dumpster-size').value;
        const duration = document.getElementById('rental-duration').value;
        const additionalTons = document.getElementById('additional-tons').value;

        let basePrice = 0;
        switch(size) {
            case '40-yard': basePrice = 900; break;
            case '30-yard': basePrice = 750; break;
            case '25-yard': basePrice = 700; break;
            case '20-yard': basePrice = 650; break;
        }

        const additionalCost = additionalTons * 50; // Assuming $50 per additional ton
        const totalPrice = basePrice + (duration > 1 ? basePrice * (duration - 1) * 0.1 : 0) + additionalCost;

        document.getElementById('total-price').textContent = `Total Price: $${totalPrice}`;
    };

    const priceCalculatorForm = document.getElementById('price-calculator');
    if (priceCalculatorForm) {
        priceCalculatorForm.addEventListener('change', calculateServicePrice);
        calculateServicePrice(); // Initial calculation on load
    }

    // Testimonial Carousel (if implemented)
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    const showTestimonial = (index) => {
        testimonials.forEach((testimonial, idx) => {
            testimonial.style.display = idx === index ? 'block' : 'none';
        });
    };

    const nextTestimonial = () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    };

    setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds

    // Initial display of first testimonial
    if (testimonials.length > 0) {
        showTestimonial(0);
    }

    // Add functionality to display equipment images in the service section
    const equipmentImages = document.querySelectorAll('.service-image');
    equipmentImages.forEach((image) => {
        image.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = e.target.getAttribute('src');
            const modal = document.createElement('div');
            modal.classList.add('image-modal');
            const modalImg = document.createElement('img');
            modalImg.setAttribute('src', imgSrc);
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            modal.onclick = () => modal.remove(); // Close the modal on click
        });
    });
});
