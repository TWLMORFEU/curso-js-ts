//SWITCH/CASE

const data = new Date('1679-09-24 00:00:00');
// const data = new Date('1977-04-21 00:00:00';
const diaSemana =  data.getDay();
console.log(diaSemana);

// let diaSemanaTexto;


// switch (diaSemana) {
// case 0:
//     diaSemanaTexto = 'Domingo'; 
//     break 
// case 1:
//     diaSemanaTexto = 'Segunda';
//     break
// case 2:  
//     diaSemanaTexto = 'Terça';
//     break
// case 3:
//     diaSemanaTexto = 'Quarta';
//     break
// case 4: 
//     diaSemanaTexto = 'Quinta';
//     break
// case 5:
//     diaSemanaTexto = 'Sexta';
//     break
// case 6: 
//     diaSemanaTexto = 'Sábado'
// default:
//     diaSemanaTexto = ''
// }

//( Caso ) segue a mesma ideia porem muito mais simples, entretanto se ele encontrar o valor ele não sai automaticamente, por isso da utilização da tag break, ela retira a informação pois ela só sai quando encontrar break, caso ela não encontrar usará o valor errado que esteja acompanhado a break

// No final não tem necessidade de usar a tag break pois ja vai sair dali, entrento com uso ou não, muda nada

// else é como se fosse um valor padrão, no switch case oque segue a mesma ideia é a tag defaut:



// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sábado';
// } else {
//     diaSemanaTexto = '';
// }



function getDiasemanatexto (diaSemana) {
    let diaSemanaTexto; // se for entre o swtch não funciona
    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'; 
        return diaSemanaTexto 
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto
    case 2:  
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto
    case 4: 
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto
    case 6: 
        diaSemanaTexto = 'Sábado'
    default:
        diaSemanaTexto = ''
    }
    // esta usando return porque ele é como se fosse o break, porem ele é proprio de funções, substituir não tem problema
}

// Ja que a função está em seu scopo local, a variavel so existe la dentro e que carrega o valor. para adicionala ao scopo global pode ser:

const diaSemanaTexto = getDiasemanatexto(diaSemana);
console.log(diaSemana, diaSemanaTexto);