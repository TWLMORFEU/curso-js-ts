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
// const numeros = [150, 250, 350, 450, 550, 650, 750, 850, 950] //-> valores
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);


// pega na ordem o primeiro e segundo numero da constante numeros
// const [primeiroNumero, segundoNumero] = numeros;
// console.log(primeiroNumero, segundoNumero);



const numeros = [150, 250, 350, 450, 550, 650, 750, 850, 950];
// const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros
// ...resto captura os valores não utilizados, utilizar o texto resto é opcional, pode ser de sua preferência
// console.log(primeiroNumero, segundoNumero, terceiroNumero);
// console.log(restante) 


// sentido de pegar o resto chama -> rest
// sentido de distribuir/espalhar chama -> spread


const num = [150, 250, 350, 450, 550, 650, 750, 850, 950];

const [um, , três, , cinco, , sete] = numeros;
// os espaços vazios saltam casas
console.log(um, três, cinco);


//                 0          1          2
//              0  1  2    0  1  2    0  1  2
const nume = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

console.log(nume[1][2]) // = 6 
// ou
// const [,[,,seis]] = 6
// dessa forma esta acessando um numero dentro do outro



