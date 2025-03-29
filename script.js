document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.main-nav .nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle ARIA attribute for accessibility
            const expanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', expanded);
        });
    }

    // --- Dynamic Copyright Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Smooth Scrolling (Optional) ---
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if it's a link targeting an element on the *same* page
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement && window.location.pathname === this.pathname) {
                 e.preventDefault(); // Only prevent default if it's a same-page anchor
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                 // Optional: Close mobile menu after clicking a link
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', false);
                }
            }
        });
    });

    // --- Placeholder for Form Submission ---
    // On contact.html, you might add:
    const contactForm = document.getElementById('register-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default browser submission
            console.log('Form submitted! Data would be sent here.');
            // **IMPORTANT:** You NEED backend code (e.g., PHP, Node.js, Netlify Forms, Formspree)
            // to actually process this form data (send email, save to database).
            alert('Thank you for your interest! We will get back to you soon.'); // Simple feedback
            // Optionally clear the form: this.reset();
        });
    }

}); // End DOMContentLoaded