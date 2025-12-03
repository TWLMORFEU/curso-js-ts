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

newRei.pop();
console.log(Rei);
console.log(newRei);




const Animais = ['cachorro', 'leão', 'capivara']
console.log(Animais.length);