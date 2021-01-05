function clicar(){
   
    var ul = document.getElementById("lista");
    var li = document.createElement("li");
    var valor = document.getElementById('texto').value;
    li.appendChild(document.createTextNode(valor));
    ul.appendChild(li);
}