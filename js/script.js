document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded ✅");

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Fade-in animation
  document.querySelectorAll("section").forEach((sec, idx) => {
    sec.style.opacity = 0;
    sec.style.transition = "opacity 0.8s ease";
    setTimeout(() => {
      sec.style.opacity = 1;
    }, 300 * idx);
  });

  // Toggle menu on click
  document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", () => {
      link.parentElement.classList.toggle("active");
    });
  });
});

// Copy link function
function copyLink(url) {
  navigator.clipboard.writeText(url).then(() => {
    alert("Copied!");
    document.querySelectorAll(".menu-container").forEach(c => c.classList.remove("active"));
  });
}
