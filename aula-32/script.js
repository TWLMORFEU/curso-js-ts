// ESTRUTURAS DE REPETIÇÃO

/*
console.log("Linha 0");
console.log("Linha 01");
console.log("Linha 02");
console.log("Linha 03");
console.log("Linha 04");
console.log("Linha 05");
*/


// i - index
for (let i = 0; i <= 20; i+=10) {
   console.log('Linha', i);
}

// i++ salto de uma casa
// i+=2 -> Salto de duas casas
// i+=10 -> Salto de dez casas


for (let i = 500; i >= 400; i -= 10) {
    console.log(`Linha ${i}`);
}


for (let i = 0; i <= 10; i++) {
    // const par = i % 2 === 0;
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}

// par recebe verdadeiro ou falso, se i for % 2 = 0 retorna true, e caso contrário false.


//                0       1       2
const frutas = ['Maça', 'Pêra', 'Uva']; /* conforme for adicionando objetos, ira sendo acrescentado ao console abaixo automaticamente */
for (let i = 0; i < frutas.length; i++) {
   console.log(frutas[i]);
}
//console.log(frutas.length)// tamanho dos indices = 3