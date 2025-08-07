function openBurgerMenu() {
  const menu = document.querySelector('.mobile-navigation');
  menu.style.display = 'unset';
}

function closeBurgerMenu() {
  const menu = document.querySelector('.mobile-navigation');
  menu.style.display = 'none';
}

function showBackground(){
  const dark_background = document.querySelector(".dark-background");
  dark_background.style.display = "unset";
}

function closeSelect(){
  const grid_child4 = document.querySelector(".grid-child4");
  const dark_background = document.querySelector(".dark-background");
  dark_background.style.display = "none";
  grid_child4.classList.remove("active");
}


const grid_child4 = document.querySelector(".grid-child4"),
earth = grid_child4.querySelector(".earth-div");

earth.addEventListener("click", () => {
  grid_child4.classList.toggle("active");
});