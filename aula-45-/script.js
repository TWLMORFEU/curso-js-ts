// Lista de Tarefas

const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");


function criaLi() {
    const li = document.createElement('li'); // cria lista
    return li;
}



inputTarefa.addEventListener('keypress', function(e) {
   if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
   }
   // faz a mesma coisa que btnTarefa porém com o botao enter
});


function limpaInput() {
    inputTarefa.value = ''; // limpa o valor do input
    inputTarefa.focus(); // Deixa o cursor piscando em (foco) ja pronto para a próxima tarefa 
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  //botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar');
  li.appendChild(botaoApagar);
}


function criaTarefa(textoInput) { // função recebe texto
  const li = criaLi(); // passa a lista criada à função
  li.innerText = textoInput; // mostra o valor de acordo com a função
  tarefas.appendChild(li) // adiciona um li cada vez que o botao for clicado
  limpaInput(); //após tudo acima ser feito, limpa input
  li.appendChild(botaoApagar);
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;

    criaTarefa(inputTarefa.value);
    // jogando o texto para uma função

    console.log(inputTarefa.value);
    // capturou o texto
});















/*
A partir de qual tecla e codigo aparece a mensagem no console

inputTarefa.addEventListener('keypress', function(e) {
  if (e.keycode === 13) {
    console.log('ENTER pressionado')
  }
})
*/


/* 
inputTarefa.addEventListener('keypress', function(e) {
   console.log(e)
});


evento keypress -> pressionar da tecla
evento keyup -> pressionar e soltar tecla
evento keydown -> pressionar tecla e ela manter pressionada
*/