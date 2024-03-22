//About animation
document.addEventListener("DOMContentLoaded", (event) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".section-hidden");
  hiddenElements.forEach((element) => observer.observe(element));
});
