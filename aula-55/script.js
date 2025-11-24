// Funções Construtoras
// Função Fábrica -> Função relativamente normal, onde retorna um objeto voluntariamente.
// Função Construtora ->  Ja faz certas coisas automaticamente, cria e retorna o objeto.




// OBS -> Função construtora, inicia com letra maiúscula em seu nome
// Fábrica -> criaPessoa
// Construtora -> Pessoa (new) | new é obrigatório


function Pessoa(nome, sobrenome) {
    // PRIVADAS -> inacessíveis por fora
    const ID = 123456;
    const metodoInterno = function () {

    };

    // Atributos ou Métodos púlicos
    this.nome = nome;
    this.sobrenome = sobrenome;


    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };

}



const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Marcos', 'Roxer');
// NÃO ESQUECER DA UTILIZAÇÃO DO NEW
console.log(p2.nome, p1.sobrenome)

// O new ja pega o valor retornado pela função, e o new so funcionara corretamente acompanhado pelo this