/*
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const nome = frm.iNome.value
    const sobrenome = frm.iSobrenome.value
    const peso = frm.iPeso.value
    const altura = frm.iAltura.value  
    
    resp.innerText = (`Seu nome: ${nome}\n Seu Sobrenome: ${sobrenome}\n Seu peso: ${peso}\n Sua altura: ${altura}`)
    e.preventDefault()
})
*/
// const dados [nome, sobrenome, peso, altura];// errado

// Corrigindo

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria array vazio para armazenar os dados
const dados = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault(); // sempre primeiro

  const nome = frm.iNome.value;
  const sobrenome = frm.iSobrenome.value;
  const peso = frm.iPeso.value;
  const altura = frm.iAltura.value;

  // Exibe no h3 com quebra de linha correta
  resp.innerText = `Seu nome: ${nome}\nSeu sobrenome: ${sobrenome}\nSeu peso: ${peso}\nSua altura: ${altura}`;

  // Salva no array (pode salvar como objeto)
  dados.push({
    nome: nome,
    sobrenome: sobrenome,
    peso: Number(peso),  // passando para numero
    altura: Number(altura), // "
  });

  // (opcional) Mostra no console
  console.log(dados);
});

// o array é criado antes e vazio, pois só faz sentido cria-lo após, com os valores ja em mãos, então adicionamos os valores com o push como objetos

/* let dados = {
  nome: "",
  sobrenome: "",
  altura: 0,
  peso: 0
};

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  dados.nome = frm.iNome.value;
  dados.sobrenome = frm.iSobrenome.value;
  dados.altura = Number(frm.iAltura.value);
  dados.peso = Number(frm.iPeso.value);

  console.log(dados);
});
*/

// Dessa forma também funciona