var squaresElement = document.getElementById('squares');

function adicionarDiv(){
    var squares = document.createElement('div');
    squares.style.width = '100px';
    squares.style.height = '100px';
    squares.style.backgroundColor = 'red';
    
    squaresElement.appendChild(squares);
}