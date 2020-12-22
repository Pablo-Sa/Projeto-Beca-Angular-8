const pessoa = {
    nome:"Paablo",
    sobrenome:"Vinícius",
    idade:30,
    endereco: {
        rua: "Não Sei",
        numero: 0800
    }
}

const { nome, ...resto } = pessoa;

console.log(nome);
console.log(resto)

const joao = {emprego:"programador" };

const curriculo = { teste:"fsf" };

const teste1 = {...joao, ...curriculo};

console.log(teste1)



console.log(pessoa);

var teste = pessoa.endereco.numero;
var teste2 = pessoa.endereco.rua;
console.log(teste);
console.log(teste2);

// const { nome, sobrenome, idade } = pessoa;

// console.log(nome);
// console.log(sobrenome);
// console.log(idade);

const primeiroArray = [1,2,3];
const segundoArray = [4,5,6];

const novoArray = [...primeiroArray,...segundoArray];

console.log(novoArray);