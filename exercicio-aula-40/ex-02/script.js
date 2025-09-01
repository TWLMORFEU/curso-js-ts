/*
- Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem
*/

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const altura = Number((frm.ialtura.value));
    const largura = Number((frm.ilargura.value));

    function ePaisagem(altura, largura) {
        return largura > altura
    }

    resp.innerText = (ePaisagem(altura, largura));
});

// Melhoria de código orientada pelo professor.  

// arrow function 

const epaisagem = (largura, altura) => largura > altura;
console.log(epaisagem(1920, 1920));
