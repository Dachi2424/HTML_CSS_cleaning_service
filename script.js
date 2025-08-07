function openBurgerMenu() {
  const menu = document.querySelector('.mobile-navigation');
  menu.style.display = 'unset';
}
function closeBurgerMenu() {
  const menu = document.querySelector('.mobile-navigation');
  menu.style.display = 'none';
}


const grid_child4 = document.querySelector(".grid-child4"),
earth = grid_child4.querySelector(".earth-div");

earth.addEventListener("click", () => {
  grid_child4.classList.toggle("active");
});