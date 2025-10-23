// Parâmetros da função

function funcao() {
   console.log(arguments[9]);
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, '...'); // Com ou sem parâmetro, da na mesma 



function funcaoo() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}
funcaoo(1, 2, 3, 4, 5, 6, 7);
// arguments -> dentro das funções tradicionais, o JS cria automaticamente esse objeto(funções criadas pela palavra function)

// o comportameto dele se associa à e um array, onde permite percorrer pelos valores com a estrutura de repetição(for...of)
/*
let total = 0; // variável que vai somar tudo
for (let argumento of arguments) { // percorre todos os valores recebidos
total += argumento; // soma cada um ao total
*/



function funccao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funccao(1, 2, 3);

 

function fun(a,b) {
    b = b || 2;
    console.log(a + b);
}
// primeiro valor a passar pelos parametros é 2, ou seja, a = 2. Ja o b nao teve nenhum valor, caso o b tenha um valor de b, valor de parametro ele substiui por 2
// totalizando em 4, 2 + 2
fun(2);


// B ta assumindo o valor padrao de um parametro. mas caso queira conferir se ele  tem um valor diferente. aao declarar funcao o parametro tem que estar (b = 4, c = 5)



function funcaaoo(a,  b = 2, c= 4) {
    console.log(a + b + c);
}
funcao(2); 
// substitui o valor de a pelo 2 e o resto continua com o valor padrão do parâmetro


funcaaoo(2,10)
// Por mais que definiu o valor padrão, ele só sera aplicado, caso não tenha outro. exemplo, no b o 10 é prioridade.


funcaaoo(2, undefined, 20); 
// Esta é a única maneira de chegar ao valor de c, sem alterar o valor padrão de b. (única forma)



// Atribuição via desestruturação em funções

function deses({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = ({ nome: 'Luiz', sobrenome: 'Ótavio', idade: 20 });
deses(obj);


function conta(operador, acumulador, numeros) {
   console.log(operador, acumulador, numeros);
}

conta('+', 0, [20, 30, 40, 50]);
// dessa menira vai aparecer todos os numeros, entretanto a estrutura padrao de array ira tambem [], sem essa estrutura apenas o primeiro número sera mostrado


function conta(operador, acumulador, ...numeros) {
   console.log(operador, acumulador, numeros);
}

conta('+', 0, 20, 30, 40, 50);
// Assim a estrutura de array não sera um problema, pois no parâmetro correspondido esta acompanhado de ... que resulta em fornecer tal funcionalidade ao primeiro e aos demais




function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        console.log(numero);
        if (operador === '+')acumulador += numero;
        if (operador === '-')acumulador -= numero;
        if (operador === '*')acumulador *= numero;
        if (operador === '/')acumulador /= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);



// IN -> retorna indice
// OF ->  valor
// ...Numeros = REst Operator -> onde sempre deve ser o último, ja que tende a aplicar os demais numeros/indices