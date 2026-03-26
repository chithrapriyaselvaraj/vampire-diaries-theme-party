const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const registrationForm = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

if (registrationForm) {
  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const character = document.getElementById("character").value;
    const creature = document.getElementById("creature").value;

    successMessage.textContent =
      `Registration successful, ${name}! Your ${creature} look inspired by ${character} has been recorded for Blood Moon Night.`;

    registrationForm.reset();
  });
}