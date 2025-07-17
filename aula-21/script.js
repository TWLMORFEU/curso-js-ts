/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar o valor verdadeiro


FALSY

*false -> valor falso literal
0
"", '', ``
null / undefined
NaN
*/

/* se encontrar expressão falsa ele ira ser representada */
/* se for todas verdadeiras, a ultima verdadeira sera representada */

console.log('Julio' && 'José' && 'Sarah');
// ultimo valor verdadeiro é considero, no caso, Sarah
console.log('Manu' && 'lena' && 0 && 'lele' && NaN);
// dois valores falsos, entretanto o primeiro identificado que é considerado 

// maneira para trabalhar com menos linhas de código
function falaOi() {
    return 'Oi';
}

let vaiExecutar = 'Vanessa';
console.log(vaiExecutar &&  falaOi());
// vai falar 'oi' pois as duas são verdadeiras então determina a ultima

vaiExecutar = 0;
console.log(vaiExecutar &&  falaOi());
/* por ter um valor falso, ira certificar qual seja e não vai executar a função */



console.log(0 || false || null || "Luiz Otávio" || true);
// Ira determinar o valor verdadeiro e apenas o primeiro 
 
// Exemplo
let corUsuario = null
