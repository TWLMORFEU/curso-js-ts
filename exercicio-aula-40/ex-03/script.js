/*
- Escreva uma função que recebe um número e retorne o seguinte: 
- Número é divisível por 3 = Fizz
- Número é divisível por 5 = Buzz
- Número é divisível por 3 e 5 = FizzBuzz
- Número NÃO é divisível por 3 e 5 = Retorna o próprio Número
- Checar se o número é realmente número
- Use a função com números de 0 a 100
*/

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inumero.value);

    function FizzBuzz(n) {
       if (isNaN(n)) {
           return "Não é um número válido!";
       }
      
    
    
        if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
        if (n % 3 === 0) return "Fizz";
        if (n % 5 === 0) return "Buzz";
        return n;

    }
    // Monta string com 0 a 100
    let resultado = "";
    for (let i = 0; i <= 100; i++) {
        resultado += `${i}: ${FizzBuzz(i)}\n`;
    }

    // Mostra no h3 (se for muito texto, melhor usar <pre> ou <div>)
    resp.innerText = resultado;

    // Se quiser mostrar só o número digitado:
    // Resp.innerText = fizzBuzz(numero):
})


// Melhoria de código orientada pelo professor.

