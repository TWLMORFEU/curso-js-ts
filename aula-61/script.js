// Método Splice
// faz tudo referente ao fim do resumo básico anterior(pop, shift...), também mexendo o array principal
 
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(0,1,elemen1, elemen2)
// 0 -> indice que quer iniciar a tarefa
// 1 -> quantos elementos quer remover a partir do indice de inicio
// elemen1,2,3... - em fim elementos que quer adicionar separados por vírgula


// simular a função pop (remover o último índice)]

//               -4         -3        -2         -1
//                0          1         2          3          
const mortos = ["Tadeu", "Benicio", "Marcos", "Juninho"];
const mortosRecentes = mortos.splice(-3, 2);
console.log(mortos, mortosRecentes);

// Em casos de iniciar em um elemento e querer remover o restante, aconselhável em (Grande escala), utilize Number.MAX_VALUE)





