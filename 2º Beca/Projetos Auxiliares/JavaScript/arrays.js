var carros = [1,2,3];
var array2 = [];
var array3 = [];

console.log(carros);

for (let index = 0; index < carros.length; index++) {
    array2.push(carros[index] * 2);

}
console.log(array2);

array2.forEach(function(item){
    array3.push(item * 2);

})

array2.forEach(item =>{
    array3.push(item * 2);
    
})
console.log(array3);

carros.map(item =>{
    console.log(item)

})