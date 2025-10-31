// Funções de Callback


function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) +
    min;
    return Math.floor(num);
}



function f1(Callback) {
    setTimeout(function() {
      console.log('f1');
      if (Callback) Callback()
    }, rand());
}

function f2(Callback) {
    setTimeout(function() {
      console.log('f2');
      if (Callback) Callback()
    }, rand());
}

function f3(Callback) {
    setTimeout(function() {
      console.log('f3');
      if (Callback) Callback()
    }, rand());
}

f1(function() {
    f2(function() {
      f3(function() {
          console.log('Olá Mundo!');
       });
    });
});

f3();
console.log('Olá Mundo!'); 