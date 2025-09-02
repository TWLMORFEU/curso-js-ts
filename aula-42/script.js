// tratando e lançando erros (try, catch, finally)

// try {
//   // É executada o código quando não há erros
// } catch (e){
//   // É executada o código quando há erros
// } finally {
//   // Sempre será executado com ou sem erros
// };


// try {
//     console.log("Abri uma gaveta");
//     console.log("Peguei a caderno");
//     console.log("Fechei a gaveta");

//     try {
//         console.log(b);
//     } catch(e) {
//         console.group("Deu erro")
//     }

// } catche (e) {
//     console.log("Tratando o erro");
// } finally {
//     console.log("FINALLY: Eu sempre sou executado");
// }



// --------------------------------

// quando a condição estiver dentro de uma função é bom verificar invertido
function retornaHora(data) {
    if (!(data instanceof Date)) {
        // só vai ser instância de date elementos que por exemplo obtiver NewDate
        console.log("Não é");
    }
}
retornaHora(new Date()) // Faz nada pois é uma instância de Date
retornaHora(); // Mostra (Não é) pois não é uma instância de Date



// ----------------------------------



function retornnaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instãnia de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('Pt-Br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',

        hour12: false // tira AM e PM
    })   
}

try {
    const dataa = new date("01-01-1970 12:58:12") 
    const hora = retornnaHora(11);
    console.log(hora);
} catch (e) {
    // Tratar erro
    // console.log(e) mostrar erro do programa
} finally {
    console.log('Tenha um bom dia !')
}
// const dataa = new date("01-01-1970 12:58:12") 
// const hora = retornnaHora(11); - Dar erro
// console.log(hora);

