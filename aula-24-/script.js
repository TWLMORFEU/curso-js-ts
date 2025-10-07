/*
Tabela de Peso
*/

// Capturar evento de submit do formulario

const frm = document.querySelector("form");
// capturou o formulario 
// referencia ao form


// adicionou evento ao clicar o submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o formulario recarregar

    // capturou os dados individuais do form
    const inputAltura = e.target.querySelector(`#ialtura`);
    const inputPeso = e.target.querySelector(`#ipeso`);
   

    // passou a conversão para numero
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    // se o dado nao for numero ira mostrar invalido e encerrar por aqui mesmo
    if (!peso) { // protege a execução do return com if
      setResultado(`Peso inválido`, false)
      return;
    }

    if (!altura) {
        setResultado(`Altura inválida`, false);
        return;
    }


    // coloca o calculo dentro da constante
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`


    // mandou determinar os resultados com tag true
    setResultado(msg, true);
});


// baseado no imc  que vamos receber na funcao. um array com lista de strings
function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];


  // ao inves de checar a logica o range, a checagem esta de trás para frente 
  if (imc >= 39.9) {
    return nivel[5];
  }

  if
    (imc >= 34.9) {
    return nivel[4];
  }

  if (imc >= 29.9) return nivel[3]; // ja que é curto pode resumir

  if (imc >= 24.9) return nivel[2];

  if (imc >= 18.5) return nivel[1];
  
  if (imc < 18.5) return nivel[0];
}

/*
function getNivelImc(imc) {
    let nivel;

    if (imc >= 39.9) {
        nivel = 'Obesidade grau 3';
    } else if (imc >= 34.9) {
        nivel = 'Obesidade grau 2';
    } else if (imc >= 29.9) {
        nivel = 'Obesidade grau 1';
    } else if (imc >= 24.9) {
        nivel = 'Sobrepeso';
    } else if (imc >= 18.5) {
        nivel = 'Peso normal';
    } else {
        nivel = 'Abaixo do peso';
    }

    return nivel;
}// forma diferente
*/
 
// faz o calculo do imc
function getImc (peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};

//apenas cria o paragrafo
function criaP () {
    const p = document.createElement('p');
    return p; 
}


// funçao que seta o resultado se for valido ou não se for falso red e verdadeiro green
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;

    const p = criaP();
    
    if (isValid) {
        p.classList.add(`paragrafo-resultado`);
    } else {
        p.classList.add('bad');
    }


    // seta o iner do paragrafo com a mesnagem recebida
    p.innerHTML = msg;

    // adiciona o paragrafo do nosso resultado
    resultado.appendChild(p);
}