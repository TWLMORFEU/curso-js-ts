// Funções de Callback


function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) +
  min;
  return Math.floor(num);
}



function f1(Callback) {
  setTimeout(function() {
    console.log('f1');
    if (Callback) Callback()
  }, rand());
}

function f2(Callback) {
  setTimeout(function() {
    console.log('f2');
    if (Callback) Callback() // se caso passou um valor, mostralo
  }, rand());
}

function f3(Callback) {
  setTimeout(function() {
    console.log('f3');
    if (Callback) Callback()
  }, rand());
}


f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}


function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá Mundo!');
}

// f1(function() {
//     f2(function() {
//       f3(function() {
//           console.log('Olá Mundo!');
//        });
//     });
// });

// Acima um encadeamento, onde deixa tudo em ordem


/* entao o numero aleatoio na verdade e o tempo de espera ?, entao é assim settimeout é a estrutura do "tempo" a partir dela ta o callback que quando menciona rand() o valor vai passar nos parametros (callback) onde ele ira verificar e mencionar, e assim o settimeout vai interpretar o valor e so quando o tempo for realizado sera mostrado abaixo no encadeamento

entao a função ela é duas vezes passada, uma pra pedir valor e depois executar


fluxo - f1 recebe o “plano” de chamar f2.

Espera um tempo aleatório (rand()).

Executa o plano → roda f2().

f2 recebe o plano de chamar f3.

Espera seu tempo aleatório.

Executa o plano → roda f3().

f3 faz o mesmo até chegar no console.log('Olá Mundo!').
  
*/