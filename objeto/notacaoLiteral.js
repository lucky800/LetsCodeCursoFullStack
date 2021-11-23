const a = 1
const b = 2
const c = 3

//Para Criar objetos com as variveis acima
// o JS facilita no processo
// Forma antiga 
const obj1 = {a: a, b: b, c: c}
//Forma nova
/* 
    Aqui ele adquiri as variveis automaticamente
    e por fim nomeando elas mesmas

*/
const obj2 = {a, b, c}
// Saida para confirmar
console.log(obj1, obj2);

// COm String
const nomeAttr = 'nota'
const valorAttr = 7.89

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3);

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4);


// NOva notacao para funcoes
const obj5 = {
    funcao1: function () {
        //...
    },

    funcao2() {
        //....
    } 
}
