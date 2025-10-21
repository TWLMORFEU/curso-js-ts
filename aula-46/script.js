// declaração de função (Function Hoisting)
falaOi();
function falaOi() {
   console.log('Oie');
}


// function = First-class objects (Objetos de primeira classe)
// Expressão de função = function expression
//const nome = 'Patrícia'
// funções são tratadas como um dado

const souUmDado = function() {
    console.log('sou um dado.')
};
//console.log(souUmDado);
souUmDado();
// jogando uma função dentro da constante

function executaFuncao(funcao) {
    funcao()
}
 
executaFuncao(souUmDado)


// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

setInterval(function() {

}, 1000);


// Dentro de um objeto 
const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};
obj.falar();

// ou 

const objj = {
    falar() {
        console.log('Estou falando...');
    }
};
objj.falar();