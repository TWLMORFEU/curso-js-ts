function saudacao (nome) {
    console.log(` Bom dia ${nome}!`); 
}
// o parametro nome, so funciona ao ser mencionado, na função
// o valor luiz vai para o nome 
saudacao ('luiz');

function saudacao(nome) {
  console.log(`Bom dia ${nome}!`);
}

let variavel = saudacao('luiz');

console.log(variavel); // → undefined

/*ao mencionar uma função e objetificar ela dentro de uma constante ou ate mesmo variavel, ela vai capturar apenas todo o resultado da função, então se o não tiver um valor a ser retornado sera undefined*/

function saudacao(nome) {
  return `Bom dia ${nome}!`;
}
// agora esta retornando um valor, no caso, Bom dia luiz.
variavel = saudacao('luiz');

console.log(variavel); // → "Bom dia luiz!"
/* e agora ao mencionar a variavel, é determinado o valor retornado, entretanto sem que seja retornado um valor, sera undefined */

function soma(x, y) {
    let resultado = x + y;
    return resultado;
}

console.log(soma(2, 8)); // os numeros irao substituir o x e y
// console.log(resultado); // nao funciona pos meciona uma variavel no scopo local, se foi declarado lá, só funciona lá

let resultado = soma(2,8); // dessa maneira ira funcionar 
console.log (resultado);


function mais(x = 2, y = 5) { // deterina um valor padrao
    let resultado = x + y;
    return resultado;
}

console.log(mais(2, 8)); // os numeros irao substituir o x e y


resultado = mais(2,8); 
console.log (resultado);


// ha tambem como colocar uma funcao dentro de outra funcao 

let raiz = function (n) {
    return n ** 0.5;

}; // ponto e virgula pois a funcao esta dentro do const

console.log(raiz(9));
console.log(raiz(81));
console.log(raiz(144));