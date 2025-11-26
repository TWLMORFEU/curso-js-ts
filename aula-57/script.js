// Funções recursivas
// Associada com funcionalidade semelhate a unma estrutura de repetição

function recursiva(max) {
   console.log(max);
   if (max >= 1000000) return;
   max++;
   recursiva(max);
}

recursiva(0);

// Função de recursividade -> uma função que se chama de volta, ao usala, se preocupe quando ela ira parar.