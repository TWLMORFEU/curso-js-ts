/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925
luiz otavio nasceu em 1980
*/

const nome = 'Eduardo Miguel';
const sobrenome = 'Oliveira';
const idade = 17;
const peso = 58;
const altura = 1.73;
 
let imc = peso / (altura * altura); //peso / (altura * altura)

let anoNascimento = 2025 - idade;

console.log (nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', altura, 'de altura e seu IMC é de', imc, nome, 'nasceu em', anoNascimento);

console.log (`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem altura de ${altura} e seu IMC é de ${imc} ${nome} nasceu em ${anoNascimento}`); 