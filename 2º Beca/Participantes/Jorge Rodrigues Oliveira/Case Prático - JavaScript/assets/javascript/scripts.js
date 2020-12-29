adicionar = () => {
    var item = document.getElementById('item').value;
    var lista = document.getElementById('lista').innerHTML;
    lista = lista + "<li>"+item+"</li>";

    document.getElementById('lista').innerHTML = lista; 
}