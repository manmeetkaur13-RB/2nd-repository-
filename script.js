// 1. HAMBURGER MENU TOGGLE
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.getElementById('hamburger');
    
    // Toggle the 'active' class to show/hide menu
    navLinks.classList.toggle('active');
    
    // Optional: Toggle a class on the hamburger for an 'X' animation
    hamburger.classList.toggle('open');
}

// 2. CLOSE MENU ON LINK CLICK (For Mobile)
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        const hamburger = document.getElementById('hamburger');
        if(navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('open');
        }
    });
});

// 3. SMOOTH SCROLLING FOR NAVIGATION
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 4. FORM SUBMISSION HANDLER
const applyForm = document.querySelector('form');

if (applyForm) {
    applyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get the submit button to show loading state
        const btn = document.querySelector('.submit-btn');
        const originalText = btn.innerText;
        
        btn.innerText = "Sending...";
        btn.style.opacity = "0.7";
        btn.disabled = true;

        // Simulate a network delay (1.5 seconds)
        setTimeout(() => {
            alert("Thank you for applying to SVtic AI! We will review your application and contact you soon.");
            
            // Reset form
            applyForm.reset();
            btn.innerText = originalText;
            btn.style.opacity = "1";
            btn.disabled = false;
        }, 1500);
      
