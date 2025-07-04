// Básico de Objetos

//const nome01 = 'Luiza';
//const sobrenome01 = 'Souza';
//const idade01 = '20';
/* Percebe-se que cada conjunto tem sua especificação "Grupo", um sendo 01 e o outro 02 */
//const nome02 = 'Léo';
//const sobrenome02 = 'Guimarães';
//const idade02 = '35';

// [] = array  {} = objeto

//const pessoal = {      // Objeto / "grupo"
    //nome: 'Luiz',
    //sobrenome: 'Miranda',   //  Atributos
    //idade: 25
//};
/* Como se mencionasse o objeto e em seguida o atributo desejado */
//console.log(pessoal.nome);
//console.log(pessoal.sobrenome);

/* Argumento é o valor que vai ser passado ao parametro, o parametro recebe o valor = argumento */

//function criaPessoa (nome, sobrenome, idade) { 
    /* Essa função é uma factory, pis cria e retorna objetos */
   // return {
       // nome: nome,
       // sobrenome: sobrenome, 
       // idade: cidade
    //};
//}

//const pessoa1 = criaPessoa('Adrian', 'Lotus', 19);

//console.log(pessoa1.nome);

//function produzPessoa (nome, sobrenome, idade) { 
   //return { nome, sobrenome, idade} /* Essa função é uma factory, pis cria e retorna objetos */
//}

//const pessoa1 = produzPessoa('Adrian', 'Lotus', 19);
//const pessoa2 = produzPessoa('Jão', 'Magalhães', 13);
//const pessoa3 = produzPessoa('Paulo', 'Romeu', 56);
//const pessoa4 = produzPessoa('Léo', 'Fernando', 49);

//console.log(`Mais Velho:  ${pessoa3.nome}, ${pessoa3.//sobrenome}, ${pessoa1.idade}`);
//console.log(`Menos esforçado:  ${pessoa1.nome}, ${pessoa1.//sobrenome}, ${pessoa1.idade}`);
//console.log(`Mais nova:  ${pessoa2.nome}, ${pessoa2.//sobrenome}, ${pessoa2.idade}`);
//console.log(`Menos saúdavel:   ${pessoa4.nome}, ${pessoa4.//sobrenome}, ${pessoa4.idade}`);
 
// função dentro de objeto = método
// dentro de objeto, não precisa declarar função com function

const names1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() { // pode declarar uma função dessa maneira

    }
};

pessoa1.fala();

/* {$this} = nesse contexto, que se refere ao nome do objetosem mencionar seu nome */

const names1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() { // pode declarar uma função dessa maneira

    }
};

pessoa1.fala();