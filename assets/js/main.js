const menu = document.querySelector('.nav__icone-menu');
const listaMenu = document.querySelector('.nav__lista');

menu.addEventListener('click', () => {
  if (!listaMenu.classList.contains('nav__lista--ativo')) {
    listaMenu.classList.add('nav__lista--ativo');
  } else {
    listaMenu.classList.remove('nav__lista--ativo');
  }
})