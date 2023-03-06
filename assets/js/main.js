const menu = document.querySelector('.nav__icone-menu');
const listaMenu = document.querySelector('.nav__lista');

menu.addEventListener('click', () => {
  listaMenu.classList.toggle('nav__lista--ativo');
});


const perguntas = document.querySelectorAll('.pergunta__card__titulo');

perguntas.forEach(element => {
  element.addEventListener('click', () => {
    const resposta = element.parentNode.querySelector('.pergunta__card__resposta').classList;
    const respostaUp = element.parentNode.querySelector('.fa-caret-up').classList;
    const respostaDown = element.parentNode.querySelector('.fa-caret-down').classList;
    resposta.toggle('hidden')
    respostaUp.toggle('hidden')
    respostaDown.toggle('hidden')
  })
});