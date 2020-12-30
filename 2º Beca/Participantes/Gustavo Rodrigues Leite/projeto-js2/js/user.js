

function clicar() {
    var user = document.getElementById('texto').value;
    var urlGit = 'https://api.github.com/users/' + user;

    axios.get(urlGit).then(function(response){

        var ul = document.getElementById("lista");
        var li = document.createElement("li");
        document.getElementById('avatar').src = response.data.avatar_url;
        document.getElementById('user').innerHTML = response.data.login;
        document.getElementById('biografia').innerHTML = response.data.bio;
        document.getElementById('followers').innerHTML = response.data.followers;
        document.getElementById('created').innerHTML = response.data.created_at;
        document.getElementById('following').innerHTML = response.data.following;
        document.getElementById('name').innerHTML = response.data.name;
        document.getElementById('location').innerHTML = response.data.location;

        console.log(response);
    
    }).catch(function (error){
    console.log('Deu Ruim');
    });
}



