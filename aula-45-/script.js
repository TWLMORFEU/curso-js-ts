// Lista de Tarefas

const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");


function criaLi() {
    const li = document.createElement('li'); // cria lista
    return li;
}



function criaTarefa(textoInput) { // função recebe texto
    const li = criaLi(); // passa a lista criada à função
    li.innerText = textoInput; // mostra o valor de acordo com a função
    tarefas.appendChild(li)
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;

    criaTarefa(inputTarefa.value);
    // jogando o texto para uma função

    console.log(inputTarefa.value);
    // capturou o texto
});