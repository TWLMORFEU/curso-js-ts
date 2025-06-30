let numeroUsuario = Number(prompt('Digite um número: '));

const TituloN = document.getElementById('tituloN');

const TextoA = document.getElementById('texto1');
const TextoB = document.getElementById('texto2');
const TextoC = document.getElementById('texto3');
const TextoD = document.getElementById('texto4');
const TextoE = document.getElementById('texto5');
const TextoF = document.getElementById('texto6');

TituloN.innerHTML = numeroUsuario;

TextoA.innerHTML = `<p>A raiz do seu número é: ${numeroUsuario ** (1/2)}.</p>`;

TextoB.innerHTML = `<p>Seu número é inteiro: ${Number.isInteger(numeroUsuario)}.</p>`;

TextoC.innerHTML = `<p>Ele é um número válido: ${Number.isNaN(numeroUsuario)}.</p>`;

TextoD.innerHTML = `<p>Se arredondarmos para baixo: ${Math.floor(numeroUsuario)}.</p>`;

TextoE.innerHTML = `<p>Se arredondarmos para cima: ${Math.ceil(numeroUsuario)}.</p>`;

TextoF.innerHTML = `<p>Com duas casas decimais: ${numeroUsuario.toFixed(2)}.</p>`;