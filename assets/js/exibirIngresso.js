function exibirIngresso() {
  const pessoa = JSON.parse(localStorage.getItem('comprador'));
  const dadosCompra = document.querySelector('.conteudo__dados-compra');

  if (pessoa.zona == 'Escolha uma zona') {
    pessoa.zona = 'Pista';
  }

  dadosCompra.innerHTML = `
    <h3 class="h6 nome-comprador">${pessoa.nome}</h3>
    <div class="infos-compra">
      <span class="p setor">${pessoa.setor}</span>
      <span class="p tipo-ingresso">${pessoa.ingresso}</span>
      <span class="p zona-setor">${pessoa.zona}</span>
    </div>
    <div class="infos-show">
      <span class="p data-show">Data: ${pessoa.data}</span>
      <span class="p local-show">Local: São Paulo - SP</span>
      <span class="p abertura-show">Abertura: 16h</span>
    </div>
  `
}

document.addEventListener('DOMContentLoaded', () => {
  exibirIngresso();
})