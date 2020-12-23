var btnElement = document.getElementById('btn');
var user = document.getElementById('usuario');

//função para puxar dados no github e imprimir na tela
btnElement.onclick = ()=>{

    //limpar campos de saida
    document.getElementById('usuario').innerHTML = '';
    document.getElementById('avatar').innerHTML = '';
    document.getElementById('login').innerHTML = '';
    document.getElementById('nome').innerHTML = '';
    document.getElementById('empresa').innerHTML = '';
    document.getElementById('local').innerHTML = '';

    //variaveis para ação do get
    var usuario = user.value;
    var urlGit = `https://api.github.com/users/${usuario}`;

    //buscando dados do usuario
    axios.get(urlGit).then(function(response){

    console.log(response);

    //setando fieldset para aparecer
    document.getElementById('fieldset').setAttribute('style', 'display: block');

    //imprimir avatar do usuario   
    let avatar = new Image(200, 200);
    avatar.src = response.data.avatar_url;
    document.getElementById('avatar').appendChild(avatar);

    //imprimir login do usuario
    let loginUser = document.createElement('div');
    let inputLogin = response.data.login;
    let login = document.createTextNode(inputLogin);
    loginUser.appendChild(login);
    document.getElementById('login').appendChild(loginUser);  

    //imprimir nome do usuario
    let nome = document.createElement('div');
    let inputNome = response.data.name;

    if(inputNome == null) {
        inputNome = "nome não informado";
        let name = document.createTextNode(inputNome);
        nome.appendChild(name);
        document.getElementById('nome').appendChild(nome);

    } else {
        let name = document.createTextNode(inputNome);
        nome.appendChild(name);
        document.getElementById('nome').appendChild(nome);

    }

    //imprimir empresa do usuario
    let empresa = document.createElement('div');
    let inputEmpresa = response.data.company;

    if(inputEmpresa == null) {
        inputEmpresa = "Empresa não informada";
        let company = document.createTextNode(inputEmpresa);
        empresa.appendChild(company);
        document.getElementById('empresa').appendChild(empresa);

    } else {
        let company = document.createTextNode(inputEmpresa);
        empresa.appendChild(company);
        document.getElementById('empresa').appendChild(empresa);

    }

    //imprimir localização do usuario
    let local = document.createElement('div');
    let inputLocal = response.data.location;

    if(inputLocal == null) {
        inputLocal = "Localização não informada"
        let locale = document.createTextNode(inputLocal);
        local.appendChild(locale);
        document.getElementById('local').appendChild(local);

    } else {
        let locale = document.createTextNode(inputLocal);
        local.appendChild(locale);
        document.getElementById('local').appendChild(local);

    }

    //se der BO diz que não foi localizado     
    }).catch(function(error) {
        //esconder display
        document.getElementById('fieldset').setAttribute('style', 'display: none');
        swal(
            {
                title: 'ATENÇÃO!',
                text: 'Usuário não encontrado.',
                icon: 'error',
                button: 'OK'
            }).then(function() {
                window.location.href = "index2.html";
            });

        });

};


