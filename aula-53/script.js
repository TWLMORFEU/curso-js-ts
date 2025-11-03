// Factory Functions - Função  Fábrica
// Constructor function (função construtota)

function criaPessoa(nome, sobrenome) {
   return {
    
    fala: function(assunto) {
      return  `${nome} ${sobrenome} está ${assunto}.`
    }
   };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.fala('falando sobre JS'));


// Função dentro de um objeto = método



function criaPeso(nome) {
   return {
    
    info: function() {
      return `${nome} pesa ${this.peso}.`;
    },
    peso: 80
   };
}
const p2 = criaPeso('Luiz', 'Otávio');

// Naturalmente a função não alcança variaveis fora de seu scopo, entretanto com this. isso é possivel, pois ele busca em toda estrutura que o objeto mencionado guarda, no caso p2


function criaCaractreristica(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome, 


    // Getter -> get -> pega valor
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },

    // setter -> set -> põe valor
    set nomeCompleto(valor) {
        valor = valor.split(' '); // split é um separador de string, onde separa a string em um array de acordo com o que você define
       
        this.nome = valor.shift() // shift remove o primeiro elemento e retorna sem ele, reduz o tamanho em um
        this.sobrenome = valor.join(' '); // Join junta todos os elementos do array a uma única string, e oque você definir ira separalos
        console.log(valor)
    },

    sobre(assunto) {
        return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,

    get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2); 
    }
  };
}

const s1 = criaCaractreristica('Luiz', 'Otávio', 1.8, 80);
console.log(p1.imc)

const s2 = criaCaractreristica('Maria', 'Joaquina', 1.6, 42);
console.log(s2.sobre('falando sobre JS'));
console.log(p2.imc());
// Para mencionar o imc acima que é um função que propriadamente é mais um método, utilizasse claro imc(), entretanto tem como deixar ela como um atributo 
/*
Utilizando get = getter atras de imc para mencionala, devera deixar de utilizar os parenteses pois é como se ela virasse um atributo
*/
