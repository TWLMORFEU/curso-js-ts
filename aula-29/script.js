// Mais detalhes sobre var, const e let


// não pode redeclarar
// let nome = omar
// let nome = omar



// let nome = 'Luiz';
// var nome2 = 'Luiz';
// if (verdadeira) {
//     console.log(nome, nome2) // Luiz Luiz
// }


// // let tem scopo de bloco, entre chaves.
// // var só tem scopo de função 
// if(Verdadeira) {
//     let nome = 'Otávio';
//     console.log(nome, nome2);
    

//     if (Verdadeira) {
//         console.log(nome, nome2)
//     }
// }

/* Observa-se que ha dois blocos sem considerar o global, o scopo menor que esta dentro dos outros, apresenta a variavel, dessa forma o sistema analisa se dentro desse bloco foi declarada a variavel para ser com o nome em que foi declarada, se caso não for, ira analisar o bloco que guarda esse mine bloco, caso for vai utilizar a variavel de la e se não for busca pelo scopo global. 
é como se a tag let fosse válida mesmo sem estar ao bloco, entretanto o comando do bloco ira dar prioridade de acordo com a ordem em que foi estruturado
*/



// VAAR

// let NOME = 'Pedro'; // criando
// var NOME2 = 'Pedro'; // criando

// if (verdadeira) {
//    let NOME = 'Marcos' // Criando
//    var NOME2 = 'Rogério' // Redeclarando

//    if (verdadeira) {
//      var NOME2 = 'Ronaldo'; // Redeclarando
//      let NOME = 'Outra coisa';
//    }
// }

// console.log(NOME, NOME2);

// Ira ficar (Pedro Ronaldo), por ser scopo de função, ele em outros scopos, ira se redeclarar e sempre que é redeclarado ele é o valor da variável é reinicializado. A partir disso, o ultimo valor mesmo em um scopo de bloco com o var ira ser introduzido, e o let continua sendo o do scopo global, as alterações ocasionadas nos scopos de bloco são como recriações  


// scopo de função
// function falaOI () {  // funções tem scopo especial
//     var nome = 'luiz'  
//     console.log(nome);  // funciona  
// }

// //console.log(nome);// nao tem como puxar o dado de uma função com varpor exemplo sem esta no scopo da função
// falaOI();



// var sobrenome = "Miranda"
// function falai () {
//     console.log(sobrenome); 
//     // a função consegue implementar variaveis proximas 
// }
// // a funcao acessa variaveis vizinhas porem os vizinhos nao podem acessar sua variavel

// falai();


// function nhh () {
//     if (verd) {
//         let nome = 'luiz'
//         var sobrenome = 'lili'
//     }
//     console.log(nome) 
//     // mesmo o var e console separados, o var aparece, pois ele não segue a ordem dos blocos, ja o let ele não aparece 
// }

// falanhh();


console.log(sobrenome);
// vai da erro pois chamou antes de declarar

var sobrenome = 'Miranda'

/* hosting, funciona apenas com var e nao com let, ela busca em casos assim a declaração quando encontrar ira jogar a declaração la no topo sendo = var sobrenome; onde vai fiar indefinido pois nao tem valor, dai abaixo podera deixar sobrenome = 'miranda'; que dessa forma ele nao mostrara o erro */


// pode criar a função e usar ou usar e criar que da na mesma, so nao pode deixar a função dentro de uma variavel