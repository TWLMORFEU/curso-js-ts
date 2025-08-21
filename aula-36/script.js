// For of - estrutura de repetição


//            01234---
const nome = ['Luiz Otávio', 'Eduardo Miguel', 'Marcelo Adriano'];  // string inteirável


for (let i = 0; i < nome.length; i++) {  // tem o indice
   console.log(nome[i])
}
// sera mostrado letra por letra a cada volta

for (let i in nome) {   // tem o indice mas simplificado
    console.log(nome[i]);
}

for (let valor of nome) { // nao tem indice apenas valor
    
    // dessa maneira, sera retornado o valor diretamente, e não o indice mesmo que sem colchetes
    console.log(valor);
}
