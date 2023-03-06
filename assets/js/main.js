const menu = document.querySelector('.nav__icone-menu');
const listaMenu = document.querySelector('.nav__lista');

menu.addEventListener('click', () => {
  listaMenu.classList.toggle('nav__lista--ativo');
});


const perguntas = document.querySelectorAll('.pergunta__card__titulo');

perguntas.forEach(element => {
  element.addEventListener('click', () => {
    const resposta = element.parentNode.querySelector('.pergunta__card__resposta').classList;
    resposta.toggle('hidden')
  })
});