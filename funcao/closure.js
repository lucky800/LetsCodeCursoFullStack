//Closure é o escopo criado quando uma funcao é declarada
// Esse escopo permite a funcao acessar e manipular variaveis externas
//a funcao

//Contexto leixico

const x = 'X'

function fora(){
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())