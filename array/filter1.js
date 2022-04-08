const produtos = [
    {nome: "notebook", preco: 2499, fragil:true},
    {nome: "IpadPro", preco: 4199, fragil:true},
    {nome: "Copo de vidro", preco: 12.49, fragil:true},
    {nome: "Copo de plastico", preco: 18.99, fragil:false}
]

console.log(produtos.filter((p) => {
    return false
}));

const caro = produtos => produtos.preco >= 500
const Fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(Fragil));

    


