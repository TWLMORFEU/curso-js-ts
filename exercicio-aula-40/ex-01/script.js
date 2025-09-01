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
        } else if (num2 > num1) {
           ana = `${num2} é maior que ${num1}`;
        } else {
           ana = "Ambos os números tem o mesmo valor"
        }

        resp.innerText = ana;
      }

   analise(num1, num2);
})


// Melhoria de código orientada pelo professor.

function max(x, y) {
   if (x > y) {
      return x;
   } else {
      return y;
   }
}

console.log

// ---------------------------------

function maax(x, y) {
   if (x > y) return x;
   return y;
}

console.log(max(10, 2));

// ----------------------------------

function maxx(x, y) {
   return x > y ? x : y;
}

console.log(max(10, 20));

// ----------------------------------

const mmax = (x, y) => x > y ? x : y;
console.log(mmax(100, 20));