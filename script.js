const toggleMenu = document.getElementById("toggleMenu");
const links = document.getElementById("liens");
toggleMenu.addEventListener('click',() => {
  links.classList.toggle('hide');
})