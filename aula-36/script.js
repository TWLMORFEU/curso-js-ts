// For of - estrutura de repetição


//            01234---
const nome = ['Luiz Otávio', 'Eduardo Miguel', 'Marcelo Adriano'];  // string iterável


for (let i = 0; i < nome.length; i++) {  // tem o indice
   console.log(nome[i]);
}
// sera mostrado letra por letra a cada volta

for (let i in nome) {   // tem o indice mas simplificado
    console.log(nome[i]);
}

for (let valor of nome) { // nao tem indice apenas valor   
    // dessa maneira, sera retornado o valor diretamente, e não o indice mesmo que sem colchetes
    console.log(valor);
}

// transmite em 3 parametros
/*
1- o valor dos indices
2- o numero dos indices
3- o array completo
*/
//                      1       2      3
nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
}); 



/*
For clássico - Geralmente com iteráveis (array ou strings)
For in - Retorna o indice ou chave (strings, array ou objeto)
For of - Retorna o valor em si (iteráveis, arrays ou strings)
*/