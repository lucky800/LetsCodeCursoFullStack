
function gerarNumeros(min,max, numerosProibidos){
    if(min>max){
        [max, min] = [min,max]
    }
    return new Promise((resolve, reject)=>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Numero repetido')
        }
        resolve(aleatorio)
    })
}

async function gerarMegaSena(qtdeNumeros) {
    const numeros = []
    for(let _ of Array(qtdeNumeros).fill()){
        numeros.push(await gerarNumeros(1,60,numeros))

    }
    return numeros
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)