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

            // Ensure targetId is not just "#"
            if (targetId && targetId.length > 1) {
                try { // Add try-catch for robustness if selector is invalid
                    const targetElement = document.querySelector(targetId);

                    // Check if element exists and if it's a same-page link
                    if (targetElement && (window.location.pathname === this.pathname || '/' + window.location.pathname === this.pathname || window.location.pathname === '/' + this.pathname)) {
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
                } catch (error) {
                    console.error("Error finding element for smooth scroll:", error);
                }
            }
        });
    });

    // --- Form Submission Code Removed ---
    // The following block has been deleted as Netlify handles the form submission automatically.
    /*
    const contactForm = document.getElementById('register-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // <-- THIS WAS THE PROBLEM LINE
            console.log('Form submitted! Data would be sent here.');
            alert('Thank you for your interest! We will get back to you soon.');
            // Optionally clear the form: this.reset();
        });
    }
    */

}); // End DOMContentLoaded
