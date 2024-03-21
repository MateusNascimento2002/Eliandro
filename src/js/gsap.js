document.body.classList.add("no-overflow");
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 2.5,
    onComplete: function () {
      // Reativa o overflow depois que a animação terminar
      document.body.classList.remove("no-overflow");
    },
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);
