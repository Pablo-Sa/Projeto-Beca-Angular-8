var tresValores = ["Argentina", "Bolivia",
    "Brasil"]
var btnElement = document.getElementById('btn');
var listElement = document.getElementsByTagName('li');


function gerarValores() {
    var tresValores = ["Argentina", "Bolivia",
    "Brasil"]
    
    
    for (let i = 0; i < tresValores.length; i++) {

        var li = document.createElement('li');
        var inputValue = `${tresValores[i]}`;
        var text = document.createTextNode(inputValue);
        li.appendChild(text);
        document.getElementById('list').appendChild(li) ;      
    }

}
//função para inserir um país na lista
btnElement.onclick = ()=>{
    var li = document.createElement('li');
    var inputValue = document.getElementById('listar').value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    document.getElementById("list").appendChild(li);
}

