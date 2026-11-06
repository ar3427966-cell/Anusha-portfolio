
// =================================
// ANUSHA - PORTFOLIO JAVASCRIPT
// =================================

// Mobile navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        menuBtn.textContent =
            navLinks.classList.contains("active") ? "✕" : "☰";
    });
}

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks?.classList.remove("active");

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }
    });
});

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

// Animate sections and cards
document.querySelectorAll(
    ".section-heading, .about-card, .skill-card, .project-card, .education-card, .contact-card"
).forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});

// Welcome message in console
console.log("Welcome to Anusha's Professional Portfolio!");