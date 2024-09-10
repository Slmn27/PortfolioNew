// Toggle Burger Menu
function showburger() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  menu.classList.toggle("active");
  burger.classList.toggle("active");
}
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
