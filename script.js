
// Day 11 - Basic JavaScript functionality

// Button click interaction
const heroButton = document.querySelector(".hero-btn");

if (heroButton) {
  heroButton.addEventListener("click", () => {
    alert("Welcome! Page structure loaded successfully 🚀");
  });
}

// Navbar active link highlight
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Console message for checking load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Day 11 page structure loaded correctly");
});
