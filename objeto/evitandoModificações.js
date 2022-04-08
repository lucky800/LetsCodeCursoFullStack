//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer nome', preco: 1.99, tag:'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Material borracha escolar'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'Fernanda'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);


//Object freeze = selado + valores constantes

