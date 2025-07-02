function saudacao (nome) {
    console.log(` Bom dia ${nome}!`); 
}
// o parametro nome, so funciona ao ser mencionado, na função
// o valor luiz vai para o nome 
saudacao ('luiz');

function saudacao(nome) {
  console.log(`Bom dia ${nome}!`);
}

const variavel = saudacao('luiz');

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
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 8)); // os numeros irao substituir o x e y
console.log(resultado); // nao funciona pos meciona uma variavel no scopo local, se foi declarado lá, só funciona lá

const resultado = soma(2,8); // dessa maneira ira funcionar 
console.log (resultado);


function soma(x = 2, y = 5) { // deterina um valor padrao
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 8)); // os numeros irao substituir o x e y


resultado = soma(2,8); 
console.log (resultado);