var setaDireita = window.document.getElementById("seta-direita");
var Leonardo = window.document.getElementById("Leonardo");
var Samantha = window.document.getElementById("Samantha");
var Bruna = window.document.getElementById("Bruna");
var setaEsquerda = window.document.getElementById("seta-esquerda");

function rolardir() {
  Leonardo.style = "display:none";
  Bruna.style = "display:flex";
  setaDireita.style = "display:none";
  setaEsquerda.style = "display:flex; margin-top:70px";
}

function rolaresq() {
  Leonardo.style = "display:flex";
  Bruna.style = "display:none";
  setaDireita.style = "display:flex";
  setaEsquerda.style = "display:none";
}
