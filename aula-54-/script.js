// Calculadora basica


function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
          this.cliqueBotoes();
        },

        realizaConta() {
           let conta = this.display.value;

           try {
              conta = eval(conta);
           
                if(!conta) {
                    alert('Conta inválida')
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
              alert('Conta inválida');
              return;
           }
        },

        clearDisplay() {
            this.display.value = '';
        },


        apagaUm() {
           this.display.value = this.display.value.slice(0, -1)
        },


       


        cliqueBotoes() {
           document.addEventListener('click', e => {
           const el = e.target;

           if(el.classList.contains('btn-num')) {
             this.btnParaDisplay(el.innerText);
           }

           if(el.classList.contains('btn-clear')) {
              this.clearDisplay();
           }

           if(el.classList.contains('btn-del')) {
             this.apagaUm()
           }

           if(el.classList.contains('btn-eq')) {
              this.realizaConta();
           }

        });
       },

       btnParaDisplay(valor) {
          this.display.value += valor;
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