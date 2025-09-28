// This file contains the JavaScript functionality for the portfolio website.
// It implements the typing text effect, scroll-based reveal animations, 
// smooth scrolling for navbar links, active section highlighting, 
// and the logic for the dark/light theme toggle.

document.addEventListener("DOMContentLoaded", function() {
    // Typing effect for hero section
    const typedText = document.querySelector(".typed-text");
    const textArray = ["Web Developer", "Designer", "Creative Thinker"];
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typedText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(deleteText, 2000);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, 50);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 500);
        }
    }

    type();

    // Smooth scrolling for navbar links
    const navbarLinks = document.querySelectorAll("nav a");
    navbarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Active section highlighting
    const sections = document.querySelectorAll("section");
    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const navLink = document.querySelector(`nav a[href="#${id}"]`);
            if (entry.isIntersecting) {
                navLink.classList.add("active");
            } else {
                navLink.classList.remove("active");
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Dark/light theme toggle
    const themeToggle = document.querySelector("#theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
    });

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.toggle("dark-theme", savedTheme === "dark");
    }
});