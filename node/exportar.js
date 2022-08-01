console.log(module.exports);
console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1
exports.b = 2
module.exports.c = 3

//mesmo colocando nulo nao se altera a o objeto pois
//quem esta no module.exports
exports = null
console.log(module.exports);

//Forma incorreta de exportar pois assim
//ela nao muda a exportacao
exports = {
    nome: "Cliente"
}
//resultado do erro
console.log(module.exports);

//se quiser atribuir mais um objeto
//para estar exportando tem que se utilizar: 
//verificar na arquivo exportar cliente 
module.exports = {
    publico: true
}