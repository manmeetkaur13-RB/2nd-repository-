/* ================================
   GLOBAL HELPERS
================================ */

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* ================================
   DAY 11 – Navbar & Header Effects
================================ */

// Sticky header shadow on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

/* ================================
   DAY 12 – Section Reveal on Scroll
================================ */

const revealElements = document.querySelectorAll(
  ".hero-content, .role-card, .benefit-item, .task-card"
);

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (elementTop < triggerPoint) {
      el.classList.add("reveal-active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ================================
   DAY 13 – Hover Micro-interactions
================================ */

document.querySelectorAll(".btn-primary").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

/* ================================
   DAY 14 – Task Card Interaction
================================ */

document.querySelectorAll(".task-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("task-active");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("task-active");
  });
});

/* ================================
   DAY 15 – Progress Highlight
================================ */

// Highlight task section when visible
const taskSection = document.querySelector(".task-section");

const observeTasks = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        taskSection.classList.add("tasks-visible");
      }
    });
  },
  { threshold: 0.3 }
);

if (taskSection) {
  observeTasks.observe(taskSection);
}

/* ================================
   MOBILE NAV (Already used by you)
================================ */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger?.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});
