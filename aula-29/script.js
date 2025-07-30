// Mais detalhes sobre const e let


// não pode redeclarar
// let nome = omar
// let nome = omar



let nome = 'Luiz';
var nome2 = 'Luiz';
if (verdadeira) {
    console.log(nome, nome2) // Luiz Luiz
}


// let tem scopo de bloco, entre chaves.
// var só tem scopo de função 
if(Verdadeira) {
    let nome = 'Otávio';
    console.log(nome, nome2);
    

    if (Verdadeira) {
        console.log(nome, nome2)
    }
}

/* Observa-se que ha dois blocos sem considerar o global, o scopo menor que esta dentro dos outros, apresenta a variavel, dessa forma o sistema analisa se dentro desse bloco foi declarada a variavel para ser com o nome em que foi declarada, se caso não for, ira analisar o bloco que guarda esse mine bloco, caso for vai utilizar a variavel de la e se não for busca pelo scopo global. 
é como se a tag let fosse válida mesmo sem estar ao bloco, entretanto o comando do bloco ira dar prioridade de acordo com a ordem em que foi estruturado
*/



