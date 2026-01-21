// 1. Sticky Header Effect
const header = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// 2. Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Scroll-Reveal Animation (The "Eye-Catching" part)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Target all sections and cards to fade in
document.querySelectorAll('section, .card').forEach((el) => {
    el.classList.add('hidden'); // Initial state
    observer.observe(el);
});
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll for Navigation
    // This ensures that clicking "More Info" or "Apply" scrolls smoothly to sections
    const buttons = document.querySelectorAll('.btn-primary');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log("Button clicked: Preparing to redirect or scroll...");
            // For now, we simulate an action
            alert("Thank you for your interest! This feature will be fully functional after the final cleanup.");
        });
    });

    // 2. Scroll Reveal Animation
    // Makes the "Main Content" sections fade in as the user scrolls down
    const observerOptions = {
        threshold: 0.1
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation to Role Cards and Benefit Items
    const animatedElements = document.querySelectorAll('.role-card, .benefit-item');
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        revealOnScroll.observe(el);
    });

    // 3. Dynamic Statistics Counter
    // Animates the "12.6%" statistic mentioned in the reference PDF[span_1](end_span)
    const statsSection = document.querySelector('.info-highlight');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateValue("stats-number", 0, 12.6, 2000);
                statsObserver.unobserve(statsSection);
            }
        });
        statsObserver.observe(statsSection);
    }
});

/**
 * Helper function to animate numbers
 */
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = (progress * (end - start) + start).toFixed(1) + "%";
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

