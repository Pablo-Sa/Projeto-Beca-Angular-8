let user;
let foto;
let nomeUsuario;
let urlRep;
let qtFollowers;
let urlFollowers;
let qtFollowing;
let urlFollowing;
let lista;

function mostraModal() {
    user = document.querySelector('#usuario').value;
    
    if(user == ' ' || user == '') {
        window.alert("Digite um usuário válido");
        fechaModal();
    }
    
    let abreModal = document.querySelector('.modalTotal');
    abreModal.style.display = 'flex';

    let urlGit = `https://api.github.com/users/${user}`;
    console.log(urlGit);

    axios.get(urlGit).then(function(response){

        nomeUsuario = response.data.login;
        foto = response.data.avatar_url;
        urlRep = response.data.repos_url;
        qtFollowers = response.data.followers;
        urlFollowers = response.data.followers_url;
        qtFollowing = response.data.following;
        urlFollowing = response.data.following_url;  
        console.log(foto);  
        document.querySelector('.foto-usuario').innerHTML = `<img alt="Foto de perfil" src = "${foto}" id="perfil">`;   

    }).catch(function (error){
    console.log('Deu Ruim');
    });
    
}

function fechaModal() {
    let escondeModal = document.querySelector('.modalTotal');
    escondeModal.style.display = 'none';
    let elemento = document.getElementById("user-list");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
}
    document.getElementById('user-list').removeChildren(lista);
}

function buscar() {
    let urlGit = `https://api.github.com/users/${user}`;
    console.log(urlGit);

    axios.get(urlGit).then(function(response){
    nomeUsuario = response.data.login;
    foto = response.data.avatar_url;
    urlRep = response.data.repos_url;
    qtFollowers = response.data.followers;
    urlFollowers = response.data.followers_url;
    qtFollowing = response.data.following;
    urlFollowing = response.data.following_url;

    let options = document.getElementById('lista');

    if(options.selectedIndex == 0) {
        lista = document.createElement("LI");
        let textlist = document.createTextNode(`Nome de Usuário: ${nomeUsuario}`);
        lista.appendChild(textlist);
        document.getElementById("user-list").appendChild(lista);
    }
    if(options.selectedIndex == 1) {
        lista = document.createElement("LI");
        let textlist = document.createTextNode(`Url do Repositório: ${urlRep}`);
        lista.appendChild(textlist);
        document.getElementById("user-list").appendChild(lista);
    }
    if(options.selectedIndex == 2) {
        lista = document.createElement("LI");
        let textlist = document.createTextNode(`Quantidade de seguidores: ${qtFollowers}`);
        lista.appendChild(textlist);
        document.getElementById("user-list").appendChild(lista);
    }
    if(options.selectedIndex == 3) {
        lista = document.createElement("LI");
        let textlist = document.createTextNode(`Url dos seguidores: ${urlFollowers}`);
        lista.appendChild(textlist);
        document.getElementById("user-list").appendChild(lista);
    }
    if(options.selectedIndex == 4) {
        lista = document.createElement("LI");
        let textlist = document.createTextNode(`Seguindo: ${qtFollowing}`);
        lista.appendChild(textlist);
        document.getElementById("user-list").appendChild(lista);
    }
    if(options.selectedIndex == 5) {
        lista = document.createElement("LI");
        let textlist = document.createTextNode(`Url dos perfis que está seguindo: ${urlFollowing}`);
        lista.appendChild(textlist);
        document.getElementById("user-list").appendChild(lista);
    }

    }).catch(function (error){
        console.log('Deu Ruim');
    });
}

