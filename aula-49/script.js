// Escopo Léxico


const nome = 'Luiz'; // segunda prioridade


function falaNome() {
    console.log(nome);
    const nome = 'Otavio' // prioridade
}
falaNome(); 

function UsaFalaNome() {
    const nome = 'Otávio' // não aparece
    falaNome();
}
UsaFalaNome(); 