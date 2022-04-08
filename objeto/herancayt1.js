const meuObjeto = {
    a: 1,
    b: 2
}

//meuObjeto.__proto__ --> Object.prototype ---> null

//const meuArray = [1, 2, 3, 4 , 5];

//meuArray.__proto__ --> Array.prototype --> Object.prototype --> null
function minhaFuncao() {
    return 1 * 2
}

//Minha funcao.__proto__ --> Function.prototype --> Object.prototype --> null

const meuArray = []

Object.create(meuObjeto)




