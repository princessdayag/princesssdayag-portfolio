const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

menuBtn?.addEventListener("click", () => {
  const isOpen = mobileNav.style.display === "block";
  mobileNav.style.display = isOpen ? "none" : "block";
});
