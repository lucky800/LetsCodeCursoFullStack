console.log(soma(2,4));
//console.log(sub(2,4));
//console.log(mult(2,4));


// Function declaration
function soma (x, y){
    return x + y
}

// Function expression
const sub = function (x, y){
    return x + y
}
console.log(sub(2,4));

//named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(2,4));