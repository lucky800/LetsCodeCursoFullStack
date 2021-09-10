function exibir(num){
    console.log("Operacao resultou em  :" + num);
}

function soma(a, b, callBack){
    var op = a + b;
    callBack(op);
}

function multiplicacao(a, b, cb){
    var op = a * b;
    cb(op);
}

soma(2, 2, exibir)
multiplicacao(2, 4, exibir)