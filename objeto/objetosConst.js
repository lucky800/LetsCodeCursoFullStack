//Constante aponta somente para um ponto
// de memoria como um exemplo
// pessoa -> 123
const pessoa = {nome: 'joao'}
pessoa.nome = 'Felipe'
console.log(pessoa);

// Tentando alterar o objeto ele atribui
// um novo ponto
// pessoa -> 456
// pessoa = {nome: 'Ana'}

//Propriedade para frezzar o objeto nao podendo
// editar mais o objeto
Object.freeze(pessoa);

pessoa.nome = 'Maria'
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'Lucas'})
console.log(pessoaConstante);
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante);