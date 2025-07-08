/*
Primitivos ( imutáveis - não pode mudar = alterar ) - string, number, boolean, undefined, null (bigint, symbol) 
*/

let nome = 'Rosa';
nome = 'Saraiva';    // Mudando o valor da variável
console.log(nome); 
nome[0] = 'J';    /* string é imutavel, não se modifica após a declaração */
console.log(nome);

let a = 'A';
let b = a; 
/* cópia quando determinar que uma variável é igual a outra, sera realizada por padrão uma cópia, e a partir disso, sera cópia quando o dado da variável for primitivo */
console.log(a, b);
a = 'Outra Coisa';
console.log(a, b); 

// Refência (mutável) - array, object, function
 
let f = [1, 2, 3];
let l = f;
let k = l;
console.log(f, l);
/* Eles tem um lugar na memória, dentre isso, eles se modificam juntos por apontarem o mesmo local na memória*/
f.push(4);
console.log(f, l);

l.pop();
console.log(f, l);
/* ambos por terem o mesmo lugar na memoria, mesmo alterando apenas o l , o lugar da memoria e igual ao de f, então os dois alteram juntos  */

// Valores copiados - primitivos
// Valores passados por referência - referência


// Caso queira copiar mesmo o valor de a para  b

let y = [1, 2, 3]
let s = [...y] /*fez uma copia ao y que é ieéndente e o valor não mudara*/
let q = s; /* Ja o q e o s estão em uma refrência direta, onde se uma mudar o outro também pois apontam ao mesmo lugar a mémoria */


// Com objetos é da mesma forma!

const azul = {
    nome:'Samu',
    sobrenome: 'Brenito'
};
const vermelho = azul;
/* se desejasse copiar apenas os dados mas não vinculasse com o mesmo lugar na mémoria, sendo: {...azul} dessa maneira o console.log vermelho iria prosseguir sem a mudança */

azul.nome = 'Tetéia';
console.log(vermelho);

// mesmo com objetos a referencia segue a mesma