var btnElement = document.getElementById("btn");
var inputElement = document.querySelector('input');

inputElement.value = "Joao";


console.log(btnElement);

btnElement.onclick = ()=>{
    console.log('Botão Clicado')

    alert(inputElement.value)
}