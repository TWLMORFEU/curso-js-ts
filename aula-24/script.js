/*
Tabela de Peso
*/

// Capturar evento de submit do formulario

const frm = document.querySelector("form");
// referencia ao form



frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o formulario recarregar
    const inputAltura = e.target.querySelector(`#ialtura`);
    const inputPeso = e.target.querySelector(`#ipeso`);
   
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) { // protege a execução do return com if
      setResultado(`Peso inválido`, false)
      return;
    }

    if (!altura) {
        setResultado(`Altura inválido`, false);
        return;
    }

    console.log(`Cheguei aqui...`);
    // continua o código
});

function criaP () {
    const p = document.createElement('p');
    return p; 
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}