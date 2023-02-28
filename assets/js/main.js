const menu = document.querySelector('.nav__icone-menu');
const listaMenu = document.querySelector('.nav__lista');

menu.addEventListener('click', () => {
  if (!listaMenu.classList.contains('nav__lista--ativo')) {
    listaMenu.classList.add('nav__lista--ativo');
  } else {
    listaMenu.classList.remove('nav__lista--ativo');
  }
});


const perguntas = document.querySelectorAll('.pergunta__card__titulo');

perguntas.forEach(element => {
  element.addEventListener('click', () => {
    let resposta = element.parentNode.querySelector('.pergunta__card__resposta').classList;

    if (!resposta.contains('hidden')) {
      resposta.add('hidden');
    } else {
      resposta.remove('hidden');
    }
  })
});