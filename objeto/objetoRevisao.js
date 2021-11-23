// COLECAO DINAMICA DE PARES CHAVES/VALOR
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto['Marca do produto']
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua Avenida Brasil'
        }
    },

    condutores: [{
        nome: 'Maysa',
        idade: '17'
    }, {
        nome: 'Elisa',
        idade: 23
    }]
}

// console.log(carro);
delete carro.condutores
console.log(carro.proprietario.lenght);