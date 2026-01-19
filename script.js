
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.navbar');

    // 1. Change Navbar Background on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = '#1a252f'; // Darker color on scroll
            navbar.style.padding = '0.5rem 5%';  // Shrink effect
            navbar.style.transition = '0.3s ease-in-out';
        } else {
            navbar.style.background = '#2c3e50'; // Original color
            navbar.style.padding = '1rem 5%';
        }
    });

    // 2. Simple Console Log to verify JS is linked
    console.log("Day 11: Page Structure & Layout Loaded Successfully.");
});
