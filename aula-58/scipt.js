//  Funções geradoras
// Responsáveis por quase pausar o código em um certo momento, sendo especial quanto as outras

function* geradora1() {
    // Código qualquer...
    yield 'Valor 1';
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer...
    yield 'Valor 3';
}

// -------------------------

const g1 = geradora1();
console.log(g1.next().value); 
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());

// --------------------------

const g2 = geradora1();
for (let valor of g2) {
    console.log(valor);
}

// --------------------------

function* geradora3() { 
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
};

const g3 = geradora3();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

// ----------------------------

function* geradora4() {
    yield 0;
    yield 1;
    yield 2;
}

function* g4() {
    yield* geradora4();
    yield 3;
    yield 4;
    yield 5;
}


const ger4 = g4();


for(let valor of ger4) {
    console.log(valor);
}
