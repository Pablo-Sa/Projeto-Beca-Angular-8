var anotherUrl = 'https://api.github.com/users/guiilhermesp';

function getData() {
    var user = document.getElementById('user');
    var rightUser = user.value
    console.log(rightUser);
    
    var urlGit = `https://api.github.com/users/${rightUser}`;

    console.log(urlGit);

    axios.get('https://api.github.com/users/' + rightUser).then(function(response) {
        console.log(response);

        // let avatar = new Image(200, 200);
        // avatar.src = response.data.avatar_url;
        // document.getElementById('avatar').appendChild(avatar);

    });
};