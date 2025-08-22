/* Exercício com Nodelist
para selecionar varios elementos dentro de um só, ou seja, uma coleção, o queryselector("") não é suficiente, entretanto, ao usar querselectorAll (""), todos os paragrafos por exemplo dentro de uma div são constatados. 
essa nodelist é semelhante demais a um array porem não é a mesma coisa
*/
const paragrafos = document.querySelector('.paraagrafos');
const ps = paragrafos.querySelectorAll('p');
// ps.length = 4 pois são 4 paragrafos


const estilosBody = getComputedStyle(document.body);


for (let p of ps) {
    console.log(p);
}