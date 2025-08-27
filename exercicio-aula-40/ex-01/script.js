// Realizar um função que retorna qual dos dois números é o maior


const frm = document.querySelector("form");
const resp = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num1 = Number((frm.inum1.value));
    const num2 = Number((frm.inum2.value));

    function analise(num1, num2) {
        let ana;
        if (num1 > num2) {
           ana = `${num1} é maior que ${num2}`;
