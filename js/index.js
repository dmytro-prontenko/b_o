import mobileMenu from "./mobile-menu.js";

document.addEventListener("DOMContentLoaded", () => {
  mobileMenu();
});

document.addEventListener("DOMContentLoaded", function () {
  const callBtn = document.querySelector(".header__call-btn");
  const contactsSection = document.querySelector("#contacts");

  callBtn.addEventListener("click", function () {
    // Перевіряємо ширину екрану
    if (window.innerWidth < 1024) {
      // Плавний скрол до секції контактів
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
