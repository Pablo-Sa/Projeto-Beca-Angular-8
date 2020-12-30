const gitUser = document.getElementById('gitUser');
const content = document.getElementById('gitProfile');
const BASE_URL = 'https://api.github.com/users/';

const getData = () => {
    let usuario = gitUser.value;
    let urlGit = BASE_URL + usuario;

    axios.get(urlGit).then(function (response){
        console.log(response)
        var userName = document.createElement('h3');
        userName.textContent = response.data.name;
        var userCompany = document.createElement('p');
        userCompany.textContent = response.data.company;
        var userImage = document.createElement('img');
        userImage.src = response.data.avatar_url;
        var userBio = document.createElement('p');
        userBio.textContent = response.data.bio;
        var userLocation = document.createElement('p');
        userLocation.textContent = response.data.location;

        content.appendChild(userImage);
        content.appendChild(userName);
        content.appendChild(userBio);
        content.appendChild(userCompany);
        content.appendChild(userLocation);

    }).catch(function(err){
        console.log('Erro')
    })
}









