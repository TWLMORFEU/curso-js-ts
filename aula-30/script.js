// //ATRIBUIÇÃO VIA DESESTRUTURAÇÃO

// let a = "A"; // B
// let b = "B"; // C
// let c = "C"; // A

// [a, b, c] = [1, 2, 3];
// // abc são a desestruturação, abc ja existem porem estao sendo passadas em array

// // const numeros = [1, 2, 3];
// // [a, b, c] = numeros;

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c); // 123


 //              0  1  2  3  4  5  6  7  8 -> indices
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9] //-> valores
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);


// pega na ordem o primeiro e segundo numero da constante numeros
const [primeiroNumero, segundoNumero] = numeros;
console.log(primeiroNumero, segundoNumero);