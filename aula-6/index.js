/*
* Aritméticos
* + Adição / Concatenação
* ** Potenciação
* % Resto da divisão
* ++ adiciona 1
* -- subtrai 1 
*/

const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

const num = 100;
const numm = 2;
console.log(num % numm);


let contador = 1;
++contador; //2
contador++; //3
++contador; //4
contador++; //5
console.log(contador++);
console.log(contador);
console.log(contador--);
console.log(contador);


// Forma indicada 

contador++;
console.log(contador);

// Passo

const passo = 30;
let contador2 = 0;

contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2);

// Mais Simples

let contador3 = 0;
contador3 += 2;     // Operadores de atribuição
contador3 *= 6;
contador3 += passo;
contador3 **= 2;
console.log(contador3);

// NAN - Not a number

const nuum = 10;
const nuumt = 'Luiz';  
console.log(nuum * nuumt);

 /* Ja que o tipo de dado é diferente, ira ser certificado NAN = Not a number, relacionado a erro em dois tipos de dados. */

 const n1 = 10;
 let n22 = ('5');
 console.log(n1 + n22);

 /* Se em uma string é colocado apenas numero e tentar fazer uma conta o Js ira considerar, e sera feita a operação, entretanto se houver uma letra não sera possivel.  */


 
 n22 = parseInt('5'); // converção para inteiro
 console.log(n1 + n22);

 console.log(typeof n22);

 n22 = parseFloat('5.5');   // converção para decimais
 console.log(n1 + n22);


 n22 = Number('43.56');
 console.log(n1 + n22);   // A maquina da o jeito dela 

