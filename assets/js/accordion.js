const perguntas = document.querySelectorAll('.pergunta__card__titulo');

perguntas.forEach(element => {
  element.addEventListener('click', () => {
    accordion(element.parentNode);
  })
});

function accordion(elemento) {
  const resposta = elemento.querySelector('.pergunta__card__resposta').classList;
  const respostaUp = elemento.querySelector('.fa-caret-up').classList;
  const respostaDown = elemento.querySelector('.fa-caret-down').classList;
  resposta.toggle('hidden')
  respostaUp.toggle('hidden')
  respostaDown.toggle('hidden')
}