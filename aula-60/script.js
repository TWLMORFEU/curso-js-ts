// Inicialiando Arrays Avançados
// Revisando o básico


//                  0         1        2
const nomes = [ "Eduardo", 'Maria', 'Joana']
nomes[2] = 'João';
delete nomes[2];
console.log(nomes);


const animais = [] //  array literal

const sobrenomes = new Array('Silva, Vieira, Castro'); // Array Construtor
nomes[2] = 'Ferrari';
delete sobrenomes[2];
console.log(sobrenomes)


//               0         1        2
const Rei = ['Eduardo', 'Maria', 'Joana'];
const newRei = [...nomes]; // cópia, portanto um se altera e o outro não. Caso fosse somente = teria mudado os dois

newRei.pop();// remove o  último elemento do array
console.log(Rei);
console.log(newRei);


const Animais = ['cachorro', 'leão', 'capivara']
console.log(Animais.length); // 3 pis tem 3 elementos

// .unshift(josé) adiciona no começo
// .shift() tira o primeiro elemento do rray e os demais substituem a casa do outro o 3 vira 2 e 2 vira 1. Não recomendado para arrays grandes


// o .pop() elimia o ultimo elemento do array
// .push(tadeu) adiciona um indice 
// mais usados




// Valor por referencia
//                0      1        2       3     4   
const naames = ['Edu', 'Maria', 'Joana', 'ana', 'vini']
const novos = naames.slice(1, 3); // maria e joana, -1, -2, e etc retira o elemento
console.log(naames); 


// convetendo string em array

const nome = 'Marcos Vinicius Badaro'; // string, como separar ?
const names = nome.split(' '); // separa cada um como elemento individual 
console.log(names)


// .join(' ') junta todos os elementos em uma unica string, e escolendo entre '' oque ira estar entre cada uma delas 
