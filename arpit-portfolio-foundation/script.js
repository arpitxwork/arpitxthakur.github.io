document.querySelector("#year").textContent = new Date().getFullYear();


// Reveal each hand-drawn navigation state on hover/focus; support tap on touch devices.
const doodleLinks = [...document.querySelectorAll(".doodle-link")];
doodleLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    doodleLinks.forEach((item) => item.classList.toggle("is-active", item === link));
  });
  link.addEventListener("focus", () => {
    doodleLinks.forEach((item) => item.classList.toggle("is-active", item === link));
  });
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
document.querySelector(".header-doodle-nav").addEventListener("mouseleave", () => {
  doodleLinks.forEach((item) => item.classList.remove("is-active"));
});
