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
// arguments -> dentro das funções tradicionais, o JS cria automaticamente esse objeto

