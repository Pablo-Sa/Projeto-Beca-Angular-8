// var inpElement = document.getElementById("newListItem")
// var ulElement = document.getElementById("lista")

// var liElement1 = document.createElement('li')
// var textElement1 = document.createTextNode("Valor 1")
// liElement1.appendChild(textElement1)
// ulElement.appendChild(liElement1)


function adicionar() {

    var item = document.getElementById("newListItem").value;
    var lista = document.getElementById("lista").innerHTML;
    lista = lista + "<li>" + item + "</li>";

    document.getElementById("lista").innerHTML = lista;
}


