let num1 = 9.55;
let num2 = 0;

num2 = Math.floor(num1); 
// Arredonda para baixo
console.log(num2);

num2 = Math.ceil(num2);
// Arredonda para cima 
console.log(num2);

num2 = Math.round(num1);
// Faz o valor arredondar pra mais próxima. Se for 9.49 - arredonda para baixo e se for 9.5 arredonda para 10, seja pra cima.  
console.log(num2);


console.log(Math.max(1,2,3,4,5,-20,-45,1000,9,10,22));
// Mostra qual numero é o maior 

console.log(Math.min(1,2,3,4,5,-20,-45,1000,9,10,22));
// Mostra qual numero é o menor 

let Aleatorio = Math.random();
// Mostra números aleatorios entre 0 e 1, tipo 0.23436677
console.log(Aleatorio);

Aleatorio = Math.random() * (10 - 5) + 5;
// você define a quantidade de intervalos com (10 - 5) = 5 intervalos 
// e o +5 determina o valor minimo. Ou seja, inicia pelo 5 e acrescenta + 5 intervalos que resultam entre 5 e 10 
// motra números aleatorios, entretanto estarão entre 10 e cinco
console.log(Aleatorio);

console.log(Math.PI);
// Determina o valor de pi

console.log(Math.pow(2, 10));
// Dessa maneira voê vai elevar resultando em 1024
// OU
console.log(2 ** 10 );

num1 = 9;
console.log(num1 ** (1/2));
// Determina a raiz quadrada do número

console.log(100 / 0);
// quanto mais aproxima-se do zero absoluto, maior ira ser, sendo resultado de um tipo de dado infinity, porem em outras linguagens seria um erro, no Js considera como uma conta válida