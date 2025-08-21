/* For - outro tipo */

const frutas = ['Pera', 'Maça', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

for (let i in frutas) {
    console.log(frutas[i]) // ler os valores do indice = nome das frutas
    // console.log(i);  ler os indices =  0, 1, 2 
} 



const pessoa = {
    nome: 'Luiz', 
    sobrenome: 'Otávio',
    idade: 30
};

console.log(pessoa.idade) // mostra idade | forma direta


for (let chaves in pessoa) {
    // console.log(chaves) // indices dentro do objeto = nome, sbrenome, idade
    console.log(pessoa[chaves]) // ler os valores da pessoa, idade, nome e sobrenome
} 