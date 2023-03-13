function exibirIngresso() {
  const pessoa = JSON.parse(localStorage.getItem('comprador'));
  const dadosCompra = document.querySelector('.conteudo__dados-compra');

  dadosCompra.innerHTML = `
    <h3 class="h6 nome-comprador">${pessoa.nome}</h3>
    <span class="p tipo-ingresso">${pessoa.ingresso}</span>
    <span class="p setor">Setor Pista</span>
    <span class="p data-show">Data: 11/03</span>
    <span class="p local-show">Local: São Paulo - SP</span>
  `
}

document.addEventListener('DOMContentLoaded', () => {
  exibirIngresso();
})