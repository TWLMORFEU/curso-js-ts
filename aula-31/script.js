const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Souza',
    Idade: 45, 
    endereco : {
        
        numero: 330
    }
};

// const nome = pessoa.nome;
// console.log(nome);
// Atribuição Normal



// Atribuição via desestruturação
// const {nome, sobrenome, idade } = pessoa; // pega o objeto + valor dentro do const ja criando uma variavel ao scopo global
//console.log(nome, sobrenome);


const { nome: teste = '', sobrenome } = pessoa; // faz o nome do objeto mudar e se tornar uma variavel
console.log(teste, sobrenome);

// const { endereco: { rua, numero } } = pessoa; 
// console.log(rua, numero);
// Na primeira chave, menciona o objeto endereco dentro de pessoa, na egunda são as variaveis que irao capturar o valor do obeto endereco, como se fosse parâmetros de uma função 

// const {endereco: endereco}  = pessoa 
// console.log(endereco)


const {
    endereco: { rua: r = 12345, numero }, // caso a rua nao ser encontrada, fica 12345 como valor padrão
    endereco
} = pessoa;
console.log(r, numero, endereco);

const { nome, ...resto } = pessoa; // pega o nome e o reserva separado de rest, onde resto captura os valore restantes
console.log(resto)