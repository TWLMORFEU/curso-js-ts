/* Exercício com Nodelist
para selecionar varios elementos dentro de um só, ou seja, uma coleção, o queryselector("") não é suficiente, entretanto, ao usar querselectorAll (""), todos os paragrafos por exemplo dentro de uma div são constatados. 
essa nodelist é semelhante demais a um array porem não é a mesma coisa
*/
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
// ps.length = 4 pois são 4 paragrafos


const estilosBody = getComputedStyle(document.body); 
// seleciona a cor do body
const backgroundColorBody = estilosBody.backgroundColor.
// captura a cor 
console.log(backgroundColorBody)

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody; // aplica a cor aos paragrafos
}