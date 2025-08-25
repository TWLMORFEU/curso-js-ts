// WHILE e DO WHILE

let controle = 0; // variável de controle 1 até 10

while (controle <= 10) {
   console.log(controle);
   controle++ 
   // este laço é muito importante para que não cria um meio infinito
}

console.log("Segue a vida...")

controle = 0 // Obrigatório uma variável de controle acima do while
const nome = "Larauto"; // L A R A U T O  = ( L até O )

while (controle < nome.length) {
   console.log(nome[controle]);
   controle++
}

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r);
}

let rand = random(1, 50);
console.log(rand); 










function aleatorio(min, max) {
   const a = Math.random() * (max - min) + min;
   return Math.floor(a);
}


const min = 1;    // busca numeros e para quando aparecer 10
const max = 50;
let famd = 10 //aleatorio(min, max);
console.log(famd !== 10)

while (famd !== 10) {
    famd = aleatorio(min, max)
    console.log(famd)
}

/* While (Enquanto) => checa a condição e depois executa o código */
console.log("#############################################")

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10)
/*
Antes de checar a condição ele mudou o valor, ou seja, ele checa a condição apos a função
*/

do {
    console.log(rand);
} while(rand !== 10);
// executou o 10 mas terminou 
// do while mostra o codigo antes de tomar uma ação e while cehca antes