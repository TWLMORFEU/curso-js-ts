// Filtrando arrays
// Filter: filtrar Map: Modificar Reduce: Reduz



//                ---- FILTER ----
// Filter -> sempre vai retornar um array, com a mesma quantidade de elementos ou menos


// Retorne  os números maiores que 10
const num1 = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 37];





// Função longa: 

//         0   1  2   3  4  5  ...
const num2 = [9, 60, 80, 2, 3, 1, 6, 43, , 11, 15, 22, 77];

const numerosFiltrados = num2.filter(callbackFilter); // função de callback

function callbackFilter(valor) {
    return valor > 10; 


 //      return true;
 //   } else {
 //       return false;
 // JA SERA RETORNADO TRUE OU FALSE EM UMA CONDIÇÃO, PORTANTO NÃO É NECESSARIO

}

console.log(numerosFiltrados);



// -----------------------------------------------------------
// função anônima

let numeroFiltrado = num2.filter(function(valor) {
    return valor > 10;
});

console.log(numeroFiltrado);


// -----------------------------------------------------------
// Arrow function

numeroFiltrado = num2.filter(valor => {
    return valor > 10;
});

console.log(numeroFiltrado);


// MENOR AINDA 
numeroFiltrado = num2.filter(valor => valor > 10);
// Apenas quando so tem um parametro/argumento


const impares = [3, 5, 7, 9, 11, 13, 17];
const numerosFimp = impares.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10;
});
console.log(numerosFimp);





