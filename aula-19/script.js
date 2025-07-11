/*
Operadores de comparação
< - Menor que
> - Maior que 
>= - Maior que ou igual a
<= - Menor que ou igual a
== - Igualdade RECOMENDADO NÃO USAR (Valor)---(= Atribuição)
=== - Igualdade estrita (Valor e tipo)
!= - Diferente (Valor) RECOMENDADO NÃO USAR
!== - Diferente estrito
*/


console.log(10 > 5); // True
console.log(10 < 5); // False
console.log(10 >= 5); // True, ate 5 for 10. 
console.log(10 <= 5); // False 


let num1 = 34;
let num2 = 34;
console.log(num1 == num2); // True, são iguais

let num3 = '45';
let num4 = 45;

console.log(num3 == num4); // True, mesmo os tipos sendo diferentes o Js realiza uma lateração automática


num1 = 34;
num2 = 34;
console.log(num1 === num2) // True, são iguais

num3 = '45';
num4 = 45;

console.log(num3 === num4); // False, a checagem é mais rigida  


num1 = 89;
num2 = 98;
console.log(num1 !== num2); //True, os números são diferentes