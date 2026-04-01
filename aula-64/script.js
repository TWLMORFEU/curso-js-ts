// Mapeando o array 
// altera o valor, recebe o mesmo tamanho mas o seus valores se alteram


// dobre os números 

//               0  1   2   3  4  5 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numeroEmdobro = numeros.map(function(valor, indice, array) {
    // mostra c/d valor, indice + array
    console.log(valor, indice, array);
});

const numeroS = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numeroEmDobro = numeroS.map(function(valor) {
   // return `Edu -> ${valor}`;
   return valor * 2 
});
console.log(numeroEmDobro);