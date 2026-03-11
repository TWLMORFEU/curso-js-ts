// Concatenando arrays
const num1 = [1 ,2 ,3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
// Método ensinado anteriormente utilizando (+)

const conjunto = num1 + num2 + num3;
console.log(conjunto)
// Junção mal feita dos valores separados por vígula, originados como string 

// Para concatenar, de maneira eficiente, e não apenas juntalos:

const con = num1.concat(num2, num3,'Edu');
console.log(con);


// [8,9,10] dentro da concatenação isso vira um array literal, para pegar so os valores utilize ...[8,9,10]



