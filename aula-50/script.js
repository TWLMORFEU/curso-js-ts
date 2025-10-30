// Closures - > uma  função interna consegue acessar variáveis da função externa, mesmo depois que a externa já terminou de rodar.

function retormaFuncao(nome) {
    // const nome = 'Luiz';
    return function () {
        return nome;
    };
}

// const funcao = retormaFuncao();
// console.log(funcao);
// função anonima


const funcao = retormaFuncao('Luiz');
const funcao2 = retormaFuncao('José');
console.dir(funcao);
console.dir(funcao2);
console.log(funcao(), funcao2());