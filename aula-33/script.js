const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');


// Não da para usar menor ou igual, pois os elementos do js são iniciados a partir do zero e são 4 elementos
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    // tagCriada.innerHTML = texto;
    let textoCriado = document.createTextNode(texto);
    div.appendChild(tagCriada);
    tagCriada.appendChild(textoCriado);
}
// ele ira seguir a ordem do primeiro ao último, então quando acabar a primeira, vai para a segunda e assim sucessivamente

container.appendChild(div)


/* Em resumo, o código reserva os elementos, com suas tags e textos, logo após ira ocorrer uma repetção, e ao observar, é visível que são realizadas em let a variável, ou seja, a cada repetição ira descer uma casa, desa maneira trocando os valores. Vai criar com o tipo de tag respectivo e logo após adicionar o texto dentro dela  */