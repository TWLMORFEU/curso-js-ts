// Setlnterval e setTimeout

function mostraHora() {
   let data = new Date(); 
   // retorna o horario de acordo com o país
   return data.toLocaleTimeString('pt-BR', {
    hour12: false
   });
}

console.log(mostraHora());
// mostra a hora
// porem buscamos um horario atualizado

// function funcaoDoIntervalo() {
//     console.log(mostraHora()); // chama função acima
// }

// setInterval(funcaoDoIntervalo, 1000);
// 1000 milesimos de segundo, a hora sera atualizada a cada 1 seg

// passar por referencia e passar a função por exemplo sem executar ela. Sem parenteses 


// NÃO NECESSARIAMENTE PRECISA CRIA UMA FUNÇÃO PARA PUXAR A OUTRA E ETC

const timer = setInterval(function () { //função fantasma(Anonima)
    console.log(mostraHora());
}, 1000);



setTimeout(function() {
    clearInterval(timer); // ela pausa a sequência
}, 10000); // parar em 10 segundos

setTimeout(function() {
    console.log('Olá mundo!');
}, 11000) // após 11 segundos ira mostrar ola mundo