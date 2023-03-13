const menu = document.querySelector('.nav__icone-menu');
const listaMenu = document.querySelector('.nav__lista');

menu.addEventListener('click', () => {
  listaMenu.classList.toggle('nav__lista--ativo');
});