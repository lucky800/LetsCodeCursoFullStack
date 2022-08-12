const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise((resolve) => {
        fs.readFile(caminho, (err, data)=>{
            resolve(data.toString())
        })
        console.log('depois de ler');
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo=>conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `o valor final é : ${conteudo}`)
    .then(data=>console.log(data))

