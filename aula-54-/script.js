// Calculadora basica


function criaCalculadora() {
    return {
        display: document.querySelector('.display'),




       inicia() {
        this.cliqueBotoes
       },


        cliqueBotoes() {
         document.addEventListener('click', function(e) {
           const el = e.target;

           if(el.classList.contains('btn-num')) {
               this.btnParaDisplay(el.innerText);
           }
        }.bind(this));
       },

       btnParaDisplay(valor) {
        
       }

    };
}

const calculadora = criaCalculadora()
calculadora.inicia();





/*
.bind(this)); = uma maniplação do valor this, this sera a referencia do evento do scopo,porem para manter sua referencia riginal e mencionada dessa forma com bind no fim da função. Determinando que o responsável daquele scopo, que sera o this para o resto da estrutura ali por diante daquele scopo 
*/

/* 
Para chamar uma chave dentro do objeto, exemplo calculadora e dentro dela executar uma chave deve-se chamar this.cliqueBotoes(); se chamar cliqeBotoes() não ira funcionar
*/

// innerText é o elemento que esta dentro da tag, no caso dentro dos botões