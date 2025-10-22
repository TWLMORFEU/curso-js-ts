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