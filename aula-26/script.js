// OBJETO DATE
// const agora = new Date();
// o marco 0, ele por padrão é = 01/01/1970 Timestamp unix ou época unix


// const agora = new Date();
// console.log(agora.toString());
// dessa maneira ira mostrar o momento específico de quando iniciado


// const tresHoras = 60 * 60 * 3 * 1000;
// valor de 3h em milisegundos sendo:
/*
60 - segundos por minuto
60 - minutos por segundo
3 - horas
1000 - milisegundos por segundo
RESULTAND0 EM: 10.800.000 milissegundos
*/


// const umDia = 60 * 60 * 24 * 1000; 
// = 86.400.000 milissegundos

//Número do Mês 1 a menos, janeiro ao invés de ser 1 é 0

const data = new Date(2019, 3, 20, 15, 14, 27); // sem zero a esquerda
console.log(data.toString())

/* Caso nos segundos for colocado mais de 999, por exemplo, no lugar do 27, fosse 1000, o js corrigiria pois ja iria considerar 1 segundo e isso não existe */

/*Da mesma forma que deixar 60 segundos ira acrescentar um minuto */

// se não colocar os dados ele considera 0 em tempo e 1 em data

// se deixar só o ano ex Date(2019) ele ira considerar como milissemos de segundo

/*
estrutura - (ano, mes, dia, hora, minuto, segundo);
*/

const dat = new Date('2019-04-20 20:20:59'); 
// forma bastante usada na maioria dos casos


const Data = new Date('2019-04-20 20:17:59.100');
console.log('Dia', data.getDate()); // numero do dia no mês
console.log('Mês', data.getMonth() + 1); // deixa no numero correto
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); // numero do dia na semana| 0 é domingo e 6 é sabado 

// new Date é pata data porem uma maneira para ver do marco 0 ate a data colocada em milessimos de segundo

console.log(Date.now()) // = 1753394730759

// se colocar esse milesimo de segundos ira dar a data de hoje



function zeroEsquerda (num)  {
    return num >= 10 ? num : `0${num}`
}


function formaData(data) {
    const Dia = zeroEsquerda(data.getDate()); // numero do dia no mês
    const Mes = zeroEsquerda(data.getMonth() + 1); // deixa no numero correto
    const Ano = zeroEsquerda(data.getFullYear());
    const Hora = zeroEsquerda(data.getHours());
    const Min = zeroEsquerda(data.getMinutes());
    const Seg = zeroEsquerda(data.getSeconds());

    return `${Dia}/${Mes}/${Ano} ${Hora}:${Min}:${Seg}`;
}

const DaTa = new Date();
const dataBrasil = formaData (DaTa); 