document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded ✅");

  // Welcome alert
  alert("Welcome to Siri Priyanka's Portfolio 🚀");

  // Dynamic footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Fade-in animation for sections
  const sections = document.querySelectorAll("section");
  sections.forEach((sec, idx) => {
    sec.style.opacity = 0;
    sec.style.transition = "opacity 0.8s ease";
    setTimeout(() => {
      sec.style.opacity = 1;
    }, 300 * idx);
  });
});
