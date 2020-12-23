var btnElement = document.getElementById('btn');
var user = document.getElementById('usuario');

btnElement.onclick = () => {
    document.getElementById('usuario').innerHTML = '';
    document.getElementById('avatar').innerHTML = '';
    document.getElementById('login').innerHTML = '';
    document.getElementById('nome').innerHTML = '';
    document.getElementById('empresa').innerHTML = '';
    document.getElementById('local').innerHTML = '';

    var usuario = user.value;
    var urlGit = `https://api.github.com/users/${usuario}`;

    axios.get(urlGit).then(function (response) {

        console.log(response);
        document.getElementById('fieldset').setAttribute('style', 'display: block');

        let avatar = new Image(350, 350);
        avatar.src = response.data.avatar_url;
        document.getElementById('avatar').appendChild(avatar);

        let loginUser = document.createElement('div');
        let inputLogin = response.data.login;
        let login = document.createTextNode(inputLogin);
        loginUser.appendChild(login);
        document.getElementById('login').appendChild(loginUser);

        let nome = document.createElement('div');
        let inputNome = response.data.name;
        let name = document.createTextNode(inputNome);
        nome.appendChild(name);
        document.getElementById('nome').appendChild(nome);

        let empresa = document.createElement('div');
        let inputEmpresa = response.data.company;
        let company = document.createTextNode(inputEmpresa);
        empresa.appendChild(company);
        document.getElementById('empresa').appendChild(empresa);

        let local = document.createElement('div');
        let inputlocal = response.data.location;
        let locale = document.createTextNode(inputlocal);
        local.appendChild(locale);
        document.getElementById('local').appendChild(local);





        
    }).catch(function (error) {

        alert('Não encontramos, será que ele existe mesmo?!')
    });

};