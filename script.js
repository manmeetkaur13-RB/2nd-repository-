// Simple scroll effect for navbar transparency
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
    } else {
        nav.style.borderBottom = "none";
    }
});
