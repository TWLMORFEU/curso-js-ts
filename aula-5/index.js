// String, Number, underfined, null, boolean, symbol
const nome = 'Luiz'; //string
const nome1 = 'Luiz'; //string
const nome2 = 'Luiz'; //string
const number1 = 10; //Number
const number2 = 10.40; //Number
let nomeAluno; //undefined -> não aponta para lugar nenhum na memória
let sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória 

let a = 2;
const b = a;

console.log(a, b); // 2,2

a = 3;
console.log(a, b); // 3,2 