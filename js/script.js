document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded ✅");

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Fade-in animation on scroll using IntersectionObserver
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("section").forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transition = "opacity 0.8s ease";
    observer.observe(sec);
  });

  // Toggle menu on click
  document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent immediate close
      link.parentElement.classList.toggle("active");
    });
  });

  // Close menus when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-container")) {
      document.querySelectorAll(".menu-container").forEach(c => c.classList.remove("active"));
    }
  });
});

// Copy link function with toast notification
function copyLink(url) {
  navigator.clipboard.writeText(url).then(() => {
    showToast("Link copied!");
    document.querySelectorAll(".menu-container").forEach(c => c.classList.remove("active"));
  });
}

// Small toast notification
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className = "toast";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

// Toggle Theme
function toggleTheme() {
  document.body.classList.toggle("dark");

  const btn = document.querySelector(".toggle-theme");
  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
}