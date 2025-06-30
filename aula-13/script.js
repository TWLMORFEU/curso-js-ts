let numero = Number(prompt('Digite um número: '));
//numero = Number(numero);

const  numeroTitulo = document.getElementById('numero-titulo');

const textoT = document.getElementById('texto');

numeroTitulo.innerHTML= numero;

texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>`;

