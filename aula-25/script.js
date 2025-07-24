// ? :
//OPERAÇÃO TERNÁRIA
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'; console.log(nivelUsuario);

// ? = SE |    : = SENAO
// PARA QUANDO A FUNÇÃO FOR CURTA E COUBER EM UMA LINHA


// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }

// uma forma de abreviar todo o código, igual o ou

const Usu = null;
const corPadrao = Usu || 'Bege';
// se não obtiver uma seleção de cor o código padroniza o bege
console.log(nivelUsuario, corPadrao);