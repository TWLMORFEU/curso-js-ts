// Selecionando elementos
const relogio = document.querySelector('#relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

// Função para formatar no estilo 00:00:00
function criaHora(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

// Função que inicia o contador
function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHora(segundos);
  }, 1000);
}

// Botão iniciar
iniciar.addEventListener("click", function () {
  relogio.classList.remove('pausado')
  clearInterval(timer); // evita criar múltiplos timers para o contador antigo, e recomeça de onde parou com o outro
  iniciaRelogio();
});

// Botão pausar
pausar.addEventListener("click", function () {
  relogio.classList.add('pausado')
  clearInterval(timer);
});

// Botão zerar
zerar.addEventListener("click", function () {
  clearInterval(timer);
  segundos = 0;
  relogio.innerHTML = "00:00:00";
});


/* os numeros se mantem em seus valores, pois a variavel segundos se mantem ja que nao estamos redeclarando, mas sim, apenas manipulando */

document.addEventListener('click', function(e) {
    // console.log(e.target);  ver elemento que esta sendo clicado
    const el = e.target; // o elemento que foi clicado, m especifico ira ir pra essa constante. Maneira de lhe dar com varios botaos em uma pagina

   /* if(el.classList.container('zerar')) {
        console.log('Você clicou em zerar');
    }*/
    //se o botão clicado for dessa classe ira mostrar a mensagem

    
});