// BREAK E CONTINUE PARA MAIS CONTROLE

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

// for (let numero of numeros) {
for (let i = 0; i < numeros.length; i++)  {

    let numero = numeros[i]
    if(numero === 2 ) { 

        // colocar o codigo que nao queremos que mostre acima de continue

        // pula o numero dois.  analisa, volta e salta

        console.log("Pulei o numero 2 ")
        // i++
        continue;
    }

    if (numero === 5 || numero === 6) {

        // i++ Usado sempre essa variavel de controle quando utilizar while ao inves de for ou for of (Nates de break e continue)

        continue;
    }


    if (numero === 13) {
        
        // console.log(numero) -> mostra o numero antes de pausar

        // i++

        break; // não mostrou o numero 8 pois a ação de retirada esta antes do console.log
    }

    // Break na hora que achar a palavra ou numero, sai do bloco automaticamente (Bom para varios numeros)


    console.log(numero);
}




/*
Continue -> pula para a próxima
Break -> Termina o laço quando encontrar o elemento

Funcionam em todo laço de repetição
*/