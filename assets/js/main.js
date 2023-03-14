const menu = document.querySelector('.nav__icone-menu');
const listaMenu = document.querySelector('.nav__lista');

menu.addEventListener('click', () => {
  listaMenu.classList.toggle('nav__lista--ativo');
});


const btnTema = document.querySelector('.nav__btn-tema');
let darkMode = localStorage.getItem('tema');
const body = document.querySelector('body');
const footerLogo = document.querySelector('.rodape__logo');
const ingressoLogo = document.querySelector('.card__logo');

if (darkMode == "true") {
  body.classList.add('dark-mode');
  if (document.title == 'CodeChella') {
    footerLogo.setAttribute('src', './assets/img/logo-branco.svg');
  } else {
    footerLogo.setAttribute('src', '../assets/img/logo-branco.svg');
  }
  if (document.title == 'Ingresso comprado') {
    ingressoLogo.setAttribute('src', '../assets/img/logo-branco.svg');
  }
}

btnTema.addEventListener('click', (e) => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    if (document.title == 'CodeChella') {
      footerLogo.setAttribute('src', './assets/img/logo-preto.svg');
    } else {
      footerLogo.setAttribute('src', '../assets/img/logo-preto.svg');
    }
    if (document.title == 'Ingresso comprado') {
      ingressoLogo.setAttribute('src', '../assets/img/logo-preto.svg');
    }
    darkMode = false;
  } else {
    body.classList.add('dark-mode');
    if (document.title == 'CodeChella') {
      footerLogo.setAttribute('src', './assets/img/logo-branco.svg');
    } else {
      footerLogo.setAttribute('src', '../assets/img/logo-branco.svg');
    }
    if (document.title == 'Ingresso comprado') {
      ingressoLogo.setAttribute('src', '../assets/img/logo-branco.svg');
    }
    darkMode = true;
  }

  localStorage.setItem('tema', darkMode)
})