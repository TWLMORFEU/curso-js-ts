//sobre números 

let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2);
// faz com que o número pareça uma string temporariarmente, ele não fez a soma, mas sim, uma concatenação e continua sendo um número

console.log(num1. toString(2));
// faz a transformação para um número binário

console.log(num1.toFixed(4));
// define uma abreviação respectiva à quantidade de decimais do número. Na hora de mostrar o resultado, utiliza que abrevia de forma objetiva

console.log(Number.isInteger(num1)); 
// retorna ao usuario uma resposta de verdadeiro ou falso, analisando se o número é inteiro.

let temp = num1 * 'olá'; 
console.log(Number.isNaN(temp));
// retorna ao usuario uma reposta de verdadeiro ou falso, analisando se a conta é invalida, como acima que é uma multiplicação de string e number 

num1 = 0.7;
num2 = 0.1;

num1 += num2; //8
num1 += num2; //9
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3
num1 += num2; //1.4
num1 += num2; //1.5

// faz contas, porém o resultado não é exato á nossa interpretação

num1 = num1.toFixed(2); 
// deixa com interpretação exata

console.log(Number.isInteger(num1));
// retorna que o número não é inteiro, pois por mais que aparente estar correto, dentro da máquina a intrpretação é diferente          

console.log(num1);


num1 = parseFloat(num1.toFixed(2));
// parseFloat ou Number
// agora a interpretação da maquina vai considerar o número corretamente


num1 = 0.7;
num2 = 0.1;

// De forma mais cmplexa para chegar ao mesmo resultado

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

console.log(num1);
console.log(Number.isInteger(num1));