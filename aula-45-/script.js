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
  botaoApagar.setAttribute('class', 'apagar'); // implementa no botão criado uma classe juntamente com seu valor.

  botaoApagar.setAttribute('title', 'Apagar esta tarefa') // agora o mesmo botão que recebeu a classe apagar, recebeu um titulo


  li.appendChild(botaoApagar);
}


function criaTarefa(textoInput) { // função recebe texto
  const li = criaLi(); // passa a lista criada à função
  li.innerText = textoInput; // mostra o valor de acordo com a função
  tarefas.appendChild(li); // adiciona um li cada vez que o botao for clicado
  limpaInput(); //após tudo acima ser feito, limpa input
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;

    criaTarefa(inputTarefa.value);
    // jogando o texto para uma função
});

document.addEventListener('click', function(e) {
  // precisa de um evento para saber onde o botao de apagar foi clicado
  const el = e.target;
  

  // se a classe contem o nome apagar...
  if (el.classList.contains('apagar')) {
    //console.log(el.parentElement); // mostra o pai do elemento para que exclua o elemento


    e.parentElement.remove(); // faz com que o pai do elemento clicado seja excluido
  }
});

function salvarTarefas() {
  //analisar quantos li tem nas tarefas

  const liTarefas = tarefas.querySelectorAll('li');
  // com isso por enquanto mostra apenas a quantidade de lista criada.
  const listDeTarefas = [];

  for (let tarefa of liTarefas) {
    // console.log(tarefa.innerText); o botao apagar acompanha 

    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    // substituiu o apagar por um espaço vazio, e a função trim elimina esse espaço inútil
    listDeTarefas.push(tarefaTexto);
  }
    
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  // pega valores reconhecido como array/objeto e passa para string com intuito de salvar 

  localStorage.setItem('tarefas', tarefasJSON);
  // tarefas = qual ira recuperar o valor 
  // tarefasJSON = valor de tudo
}















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