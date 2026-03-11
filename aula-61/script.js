// Método Splice
// faz tudo referente ao fim do resumo básico anterior(pop, shift...), também mexendo o array principal
 
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(0,1,elemen1, elemen2)
// 0 -> indice que quer iniciar a tarefa
// 1 -> quantos elementos quer remover a partir do indice de inicio
// elemen1,2,3... - em fim elementos que quer adicionar separados por vírgula


//               -4         -3        -2         -1
//                0          1         2          3          
const mortos = ["Tadeu", "Benicio", "Marcos", "Juninho"];
const mortosRecentes = mortos.splice(-3, 2);
console.log(mortos, mortosRecentes);

// Em casos de iniciar em um elemento e querer remover o restante, aconselhável em (Grande escala), utilize Number.MAX_VALUE)




// Agora uma maneira de adicionar itens ao array
const resgatados = [ "Marlom", "Tulio", "José", "Golias"];
const doentes = resgatados.splice(3, 0, "Luiz");
console.log(resgatados, doentes);
// adiciona no lugar escolhido ao elemento, não a partir, deslocando o restante a uma casa a frente
// Método splice só restorna oque foi removido, não adicionado
// Para substitui, ira remover o indice e logo em seguida adicionar
// Da mesma forma que pode remover mais de um, ode também adicionar mais de umm



// Simular pop
resgatados.splice(-1 , 1);
console.log(resgatados)
// Remove o último



// Simular shift
resgatados.splice(0,1);
console.log(resgatados);
// Remove o primeiro



// Simular push 
resgatados.splice(0, 0, 'Luiza');
console.log(resgatados);
// Adiciona no início



// Simular unshift 
resgatados.splice(-1, 1, 'Maria');
console.log(resgatados);
// Adiciona no último