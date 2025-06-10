let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varS;

varS = varA;
varA = varB;
varB = varC;
varC = varS;

console.log(varA, varB, varC);

//ou

let vara = 'a';
let varb = 'b';
let varc = 'c';

[vara, varb, varc] = [varb, varc, vara]
console.log(vara, varb, varc);