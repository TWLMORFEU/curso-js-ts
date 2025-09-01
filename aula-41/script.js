// Tratando e lançando erros

console.log(jajahuhu) // erro - variável não foi declarada então não existe

try {
    console.log(naoExisto);
} catch(err) {
    console.log('naoExisto não existe') // altera a mensagem desse tipo de erro para esta. sem nenhum complemento
    console.log(err); // armazena o erro que o programa mencionou
}

/* Não é bom mencionar os erros internos do programa pois os exibindo ao usuário, além do usuário não compreender bem por não ser uma boa experiência, também pode ser potencialmente perigoso quando você está expondo coisas internas do seu programa */



function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números. ');
        /* Sera mostrado da seguinte forma: Error: x e y... e as instruções da máquina. De certa forma no lugar do error podrria ser referenceError que tambem seria mostrado quando ocorrer o erro e seria instruído tanto a mensagem quanto as instruções da máquina*/
    }
    return x + y;
}


try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    console.log(error) // vai mostrar o erro porem sem nenhum complemento exemplo (onde esta a linha do erro)
}

// console.log(soma('1',2)); = o rpograma mostra onde ocorreu o erro junto com a tag e a mensagem juntas: throw('x e y precisam ser números. ');
// console.log(soma(1, 2)); = 3