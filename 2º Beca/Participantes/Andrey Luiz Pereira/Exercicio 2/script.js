var btnElement = document.getElementById('btn');
var listElement = document.getElementsByTagName('li');

//função para inserir um país na lista
btnElement.onclick = ()=>{
    var li = document.createElement('li');
    var inputValue = document.getElementById('listar').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("list").appendChild(li);
}

