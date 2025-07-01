/* Array-> Conjunto de conteudos de dados que serve para armazenas vários valores em uma única variável */

// array é de tipo objeto

// Arrays utilizam conchete []

const nome = ('Luiz Pernambucano'); 
console.log(nome[0]);


const alunos = ['Luiz', 'Maria', 'Fernanda', 'Lucas']; 
console.log(alunos[2]);

alunos = ['Luiz', 'Maria', 'Fernanda', 'Lucas'];

// vão ser acrescentados ao fim 

alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Cauã';
alunos[alunos.length] = 'Caio';       
alunos[alunos.length] = 'Ricardo';
// console.log(alunos);

alunos = ['Luiz', 'Maria', 'Fernanda', 'Lucas'];

alunos[3] = 'Lele'; // quando existe, SUBSTITUI
alunos[4] = 'Terencio' // quando não existe, CRIA 
console.log(alunos);

alunos = ['Luiz', 'Maria', 'Fernanda', 'Lucas'];

alunos.push('Abravanel'); 
alunos.push('Cardinho');
// metodo push usado propriamente para adicionar itens ao fim  
console.log(alunos);

alunos = ['Luiz', 'Maria', 'Fernanda', 'Lucas'];
// agora para acrescentar ao início .unshift 
alunos.unshift('marcia'); 
alunos.unshift('Jorge'); 
console.log(alunos);

alunos = ['Luiz', 'Maria', 'Fernanda', 'Lucas'];
// Remove do fim  .pop
alunos.pop();

alunos = ['Luiz', 'Maria', 'Fernanda', 'Lucas'];
// para salvar oque foi removido utiliza-se 
const removido = alunos.pop(); 
console.log(removido); // Introduz o que foi retirado
console.log(alunos) // determina como ficou com elemento removido


alunos = ['Luiz', 'Maria', 'Fernanda', 'Lucas'];
// paa remover do inicio .shift

removido = alunos.shift();
console.log(removido);
console.log(alunos);

alunos = ['Luiz', 'Maria', 'Fernanda', 'Lucas'];

/* quando se acrescenta um elemento ao inicio, ou ate mesmo retira, ele muda os demais indices, ou seja, altera os indices confome o primeiro é modificado.*/

// para apenas apagar um elemnto sem que o indice altere faça:

delete alunos[1]; // O elemento onde esta o indice 1 vai ficar vazio = undefined
console.log(alunos);
// no js se vc tentar puxar um item que não existe ao inves de dar erro vai resultar em undefined. um exemplo é se você buscar um indice 50 sendo que só tem 4 

alunos = ['Luiz', 'Maria', 'Fernanda', 'Lucas', 'marcos', 'Pedro', 'Cesar'];
// para fatiar
console.log(alunos.slice(0, 3)); // vai deixar apenas o (0,1,2)
console.log(alunos.slice(0, -3));

// para saber se realmente é um array 
console.log(alunos instanceof Array);