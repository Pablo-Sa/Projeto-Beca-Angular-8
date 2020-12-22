//tsc main.ts
//http://es6-features.org/#Constants
var minhaVar = 'Minha Variável';
function minhaFuntion(a, b) {
    return a + b;
}
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
//Exemplo de ArrowFunction
numeros.map(function (valor) {
    return valor * 2;
});
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var joao;
var result = joao.soma(1, 2);
console.log(result);
var a = 'afsd';
a = 10;
