function redireciona() {
    window.alert("Dados gravados com sucesso");
/*
    function gravaUsuario() {
        let nome = document.getElementsByName().value;
        let sobrenome = document.getElementsByName().value;
        let dataNascimento = document.getElementsByName().value;
        let genero = document.querySelector(".genero").value;
        let pais = document.querySelector(".paises").value; 
        let fone = document.querySelector(".fone").value;

        console.log(`Usuário nome: ${nome} - Sobrenome: ${sobrenome} - Data de Nascimento: ${dataNascimento} - Gênero: ${genero}
         - País: ${pais} - Telefone: ${fone}`);
    }
*/
    window.location.href = "./busca.html";
}

function buscaGoogle() {
    let elemento = document.getElementById("busca").value;
    window.location.assign("https://www.google.com/search?q="+elemento);
    console.log(elemento);
}

