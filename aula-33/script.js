const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');


// Não da para usar menor ou igual, pois os elementos do js são iniciados a partir do zero e são 4 elementos
for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i]);
}
// ele ira seguir a ordem do primeiro ao último, então quando acabar a primeira, vai para a segunda e assim sucessivamente