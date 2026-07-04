// ===============================
// IPC Grace Worship Center
// script.js
// ===============================

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Header Shadow on Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 3px 10px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }

});


// Prayer Request Form Validation
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const prayer = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || prayer === "") {
        alert("Please fill in all fields.");
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("🙏 Thank you! Your prayer request has been submitted.");

    form.reset();

});


// Hero Buttons Animation
document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.transition = "0.3s";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });

});


// Fade-in Animation on Scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});


// Current Year in Footer
const footer = document.querySelector("footer p");

footer.innerHTML =
    `© ${new Date().getFullYear()} IPC Grace Worship Center. All Rights Reserved.`;


// Mobile Menu (Optional Future Expansion)
console.log("IPC Grace Worship Center Website Loaded Successfully");