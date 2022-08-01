const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {  
    if( err === null )
        console.log('Arquivo salvo!')
    else{
        console.log(err.message)
    }
})