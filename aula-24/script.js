/*
Tabela de Peso
*/

// Capturar evento de submit do formulario

const frm = document.querySelector("form");



frm.addEventListener("submit", (e) => {
    e.preventDefault();
    let peso = frm.ipeso.value;
    let altura = frm.ialtura.value;

    console.log('Evento previnido.');
    setResultado('Olá mundo!');

});

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;
}