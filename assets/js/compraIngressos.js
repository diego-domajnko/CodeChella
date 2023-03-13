const form = document.querySelector('.ingresso__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const pessoa = {
    nome: '',
    ingresso: ''
  }

  pessoa.nome = document.getElementById('nome').value;
  pessoa.ingresso = selecionarTipoIngresso();

  localStorage.setItem('comprador', JSON.stringify(pessoa));

  window.location.href = "../pages/ingresso-comprado.html";
})

function selecionarTipoIngresso() {
  const ingresso = document.querySelector('#ingresso').querySelectorAll('option');
  let tipoIngresso = '';

  ingresso.forEach(element => {
    if (element.selected) {
      tipoIngresso = element.textContent;
    }
  });

  return tipoIngresso;
}