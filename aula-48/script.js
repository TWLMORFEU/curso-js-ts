// Retorno de funções

// return -> retorno de função -> termina a função

function soma(a, b) {
    return a + b;
}
console.log(soma(5, 2)); // 7


function soma2(a, b) {
    console.log(a, b);
}
soma2(5, 2); // 7



// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// }); // Muda a cor do body, entretanto não retorna nada



function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}
const p1 = criaPessoa('Luiz', 'Otávio');

// mesma coisa de:

const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(p1);
console.log(p2);
//console.log(typeof p1); // object = objeto
//console.log(typeof p2); // object = objeto


function falaFrase(comeco) {
   function falaResto(resto) {
    return comeco + ' ' + resto;
   }
   return falaResto;
}

// const olaMundo = falaFrase('Olá'); console.log(olaMundo('mundo!'));


const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);



// explicação: o Olá passa pelo parametro comeco e se concatena a um espaço vazio e depois se concatena ao mundo que passa pelo parametro resto. dai a funcao principal esta dentro de uma constante e aoi mencionar a contate junto com os parametros resulta em ola mundo



// Se chamar uma função sem os parenteses, não vai retornar ela e suas funcionalidades, entretanto se usar ai sim ela funcionara como o esperado


// * Foi mencionado acimq, uma estrateegia de diminuir funções ou estruturas grandes. Um exemplo era a boneca russa onde vai tirando uma de dentro da outra

// esse método é muito importante em:

function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

// resume em:

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    };
}

const dupplica = criaMultiplicador(2);
const triiplica = criaMultiplicador(3);
const quaddriplica = criaMultiplicador(4);

console.log(dupplica(2));
console.log(triiplica(2));
console.log(quaddriplica(2));