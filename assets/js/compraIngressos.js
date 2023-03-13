const form = document.querySelector('.ingresso__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const pessoa = {}
  const caixasSelecao = document.querySelectorAll('select');

  pessoa.nome = document.getElementById('nome').value;
  caixasSelecao.forEach(element => {
    if (element.id == 'setor') {
      pessoa.setor = selecionarIngressoSetor(element.id);
    } else {
      pessoa.ingresso = selecionarIngressoSetor(element.id);
    }
  });

  localStorage.setItem('comprador', JSON.stringify(pessoa));

  window.location.href = "../pages/ingresso-comprado.html";
})

function selecionarIngressoSetor(id) {
  const lista = document.querySelector(`#${id}`).querySelectorAll('option');
  let opcaoSelecionada = '';

  lista.forEach(element => {
    if (element.selected) {
      opcaoSelecionada = element.textContent;
    }
  });

  return opcaoSelecionada;
}

// function validarIdade() {
//   const dataNascimento = new Date(document.querySelector('#nascimento').value)
//   const dataMaiorIdade = new Date(dataNascimento.getUTCFullYear() + 16, dataNascimento.getMonth(), dataNascimento.getDate())
//   const hoje = new Date();

//   return hoje >= dataMaiorIdade;
// }

// function validarCPF() {

// }