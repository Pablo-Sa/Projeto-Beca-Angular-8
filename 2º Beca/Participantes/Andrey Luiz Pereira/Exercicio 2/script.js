var tresValores = ["Argentina", "Bolivia",
    "Brasil"]
var btnElement = document.getElementById('btn');
var listElement = document.getElementsByTagName('li');

//funcao para gerar os 3 primeiros valores
function gerarValores() {
    var tresValores = ["Argentina", "Bolivia",
    "Brasil"]
    
    
    for (let i = 0; i < tresValores.length; i++) {

        var li = document.createElement('li');
        var inputValue = `${tresValores[i]}`;
        var text = document.createTextNode(inputValue);
        li.appendChild(text);
        document.getElementById('list').appendChild(li);      
    }

}
//função para inserir um país na lista
btnElement.onclick = ()=>{
    var li = document.createElement('li');
    var inputValue = document.getElementById('listar').value;

    if(inputValue == null || inputValue == ''){
        swal(
            {
                title: 'ATENÇÃO!',
                text: 'Por favor, insira um valor válido.',
                icon: 'info',
                button: 'OK'
            }).then(function() {
                window.location.href = "index.html";
            });

    } else {
        var text = document.createTextNode(inputValue);
        li.appendChild(text);
        document.getElementById("list").appendChild(li);
        
    }
}

