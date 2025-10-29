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



document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
}); // Muda a cor do body, entretanto não retorna nada



function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome};
}
const p1 = criaPessoa('Luiz', 'Otávio');

// mesma coisa de:

const p2 = {
    nome: 'João',
    sobrenome
}