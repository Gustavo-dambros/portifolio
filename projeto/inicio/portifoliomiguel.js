// Modo claro/escuro
const botaoModo = document.getElementById("modo");
const body = document.body;

botaoModo.addEventListener("click", () => {
  body.classList.toggle("modo-claro");
  localStorage.setItem("tema", body.classList.contains("modo-claro") ? "claro" : "escuro");
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("tema") === "claro") {
    body.classList.add("modo-claro");
  }
});

// Efeito de digitação
const elemento = document.getElementById("texto-1");
const frases = [
  "Olá! Que bom te ver por aqui!",
  "E aí, tudo certo?",
  "Fala, tudo bem?",
  "Oi, prazer em te ver por aqui!",
  "E aí, bora conhecer meu trabalho?",
  "Seja bem-vindo(a) ao meu portifólio!",
];

let frasesDisponiveis = [...frases];
let indiceFrase = Math.floor(Math.random() * frasesDisponiveis.length);
let indiceLetra = 0;
let deletando = false;

function digitar() {
  const fraseAtual = frasesDisponiveis[indiceFrase];

  if (!deletando) {
    elemento.textContent = fraseAtual.substring(0, indiceLetra + 1);
    indiceLetra++;
    if (indiceLetra === fraseAtual.length) {
      deletando = true;
      setTimeout(digitar, 2000);
      return;
    }
  } else {
    elemento.textContent = fraseAtual.substring(0, indiceLetra - 1);
    indiceLetra--;
    if (indiceLetra === 0) {
      deletando = false;
      frasesDisponiveis.splice(indiceFrase, 1);
      if (frasesDisponiveis.length === 0) frasesDisponiveis = [...frases];
      indiceFrase = Math.floor(Math.random() * frasesDisponiveis.length);
    }
  }

  setTimeout(digitar, deletando ? 50 : 100);
}

digitar();

// Menu hamburguer
const menuBotao = document.getElementById("menu");
const menuLista = document.querySelector("nav ul");
const menuLinks = document.querySelectorAll("nav ul li");

menuBotao.addEventListener("click", () => menuLista.classList.toggle("show"));
menuLinks.forEach(link => link.addEventListener("click", () => menuLista.classList.remove("show")));

// Cards de projeto (hover)
document.querySelectorAll('.card-proj').forEach(card => {
  const imgProj = card.querySelector('.img-proj');
  const imgTag = imgProj?.querySelector('img');

  const ativar = () => card.classList.add('ativo');
  const desativarSeSaiu = e => {
    const destino = e.relatedTarget;
    if (!destino || !card.contains(destino)) card.classList.remove('ativo');
  };

  card.addEventListener('mouseenter', ativar);
  imgProj?.addEventListener('mouseenter', ativar);
  imgTag?.addEventListener('mouseenter', ativar);

  card.addEventListener('mouseleave', desativarSeSaiu);
  imgProj?.addEventListener('mouseleave', desativarSeSaiu);
  imgTag?.addEventListener('mouseleave', desativarSeSaiu);
});

// Formulário via WhatsApp
const form = document.querySelector('.formulario');
form.addEventListener('submit', e => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('e-mail').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = `%0A%0ANome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;
  const url = `https://wa.me/5545984060089?text=${texto}`;
  window.open(url, '_blank');
});

// Trocar portfólio
document.addEventListener('DOMContentLoaded', () => {
  const btnTrocarPort = document.getElementById('trocar-port');
  const targetUrl = 'portifoliodambros.html';

  btnTrocarPort?.addEventListener('click', () => {
    body.classList.add('pagina-saindo');
    setTimeout(() => window.location.href = targetUrl, 200);
  });
});
