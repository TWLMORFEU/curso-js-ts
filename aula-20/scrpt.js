/*
Operadores lògicos
&& -> AND -> E -> Toas as expressões tem que ser verdadeiras para retornar True
|| -> Or -> Ou
! -> Not -> Não
*/
let expressao = true && true && false && true;
console.log(expressao); // falsw
expressao = true && true && true && true;
console.log(expressao) // true

let expressaor = false || true;
/* (true + true = true)(true + false = true)(false + false = false) só retorna false quando todas forem falsas*/ 
console.log(expressaor);


const usuario = 'Luiz'; // form usuario digitou
const senha =  '12s3d5'; // form usuario digitou 

/* para logar, o usuario e senha teêm que corresponder aos dois dados  */
const vaiLogar = usuario === 'Luiz' && senha ==='12s3d5';
console.log(vaiLogar);


console.log(!false);// esta negando o false e sera true
console.log(!true); // esta negando true, sera false 
console.log(!!false); // vira true e false denovo