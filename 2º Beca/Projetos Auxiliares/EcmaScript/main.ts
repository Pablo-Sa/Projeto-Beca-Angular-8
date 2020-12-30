//tsc main.ts
//http://es6-features.org/#Constants
var minhaVar = 'Minha Variável';

function minhaFuntion(a,b){
    return a+b;
}

let num = 2;
const PI = 3.14;

var numeros = [1,2,3];
//Exemplo de ArrowFunction
numeros.map(function(valor){
    return valor * 2;
})

class Matematica {
    soma(x,y){
        return x+y;
    }
}

var joao:Matematica;
var result = joao.soma(1,2);
console.log(result);

var a:string = 'afsd';
a = 10;