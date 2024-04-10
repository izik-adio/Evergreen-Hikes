document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleMenu");
  const mobileNav = document.getElementById("mobile");

  const toggleClass = (element, classes) => {
    for (let i = 0; i < classes.length; i++) {
      element.classList.toggle(classes[i]);
    }
  };

  btn.addEventListener("click", () => {
    toggleClass(btn.children[0], ["rotate-45", "translate-y-1.5"]);
    btn.children[1].classList.toggle("hidden");
    toggleClass(btn.children[2], ["-rotate-45"]);
    mobileNav.classList.toggle("hidden");
  });
});
