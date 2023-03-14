const form = document.querySelector('.ingresso__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const pessoa = {}
  const caixasSelecao = document.querySelectorAll('select');

  pessoa.nome = document.getElementById('nome').value;
  caixasSelecao.forEach(element => {
    if (element.id == 'setor') {
      pessoa.setor = selecionarIngressoSetor(element.id);
    } else if (element.id == 'ingresso') {
      pessoa.ingresso = selecionarIngressoSetor(element.id);
    } else if (element.id == 'zona') {
      pessoa.zona = selecionarIngressoSetor(element.id);
    } else if (element.id == 'data') {
      pessoa.data = selecionarIngressoSetor(element.id);
    }
  });
  pessoa.email = document.getElementById('email').value;
  pessoa.cpf = document.getElementById('cpf').value;
  pessoa.nascimento = document.getElementById('nascimento').value;

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



const seletor = document.getElementById('setor');

seletor.addEventListener('change', (e) => {
  const zona = document.getElementById('zona');
  
  if (seletor.value === 'pista') {
    zona.setAttribute('disabled', 'disabled');
  } else {
    zona.removeAttribute('disabled');
  }
})

// function validarIdade(dataNascimento) {
//   const dataMaiorIdade = new Date(dataNascimento.getUTCFullYear() + 16, dataNascimento.getMonth(), dataNascimento.getDate())
//   const hoje = new Date();

//   return hoje >= dataMaiorIdade;
// }

// function validarCPF() {

// }