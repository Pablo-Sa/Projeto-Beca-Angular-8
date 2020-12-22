var urlGit = 'https://api.github.com/users/pablo-sa';

axios.get(urlGit).then(function(response){
    console.log(response);

    console.log(response.data.avatar_url)

}).catch(function (error){
console.log('Deu Ruim');
});