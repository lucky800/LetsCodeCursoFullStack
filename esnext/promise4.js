function gerarNumeros(min,max,tempo){
    if(min>max) [max, min] = [min,max]
    return new Promise(resolve=>{
        setTimeout(function(){
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
        }, tempo)
    })
}

function variosNumeros() {
    return Promise.all([
        gerarNumeros(1,60,4000),
        gerarNumeros(1,60,500),
        gerarNumeros(1,60,3000),
        gerarNumeros(1,60,100)
    ])
}
variosNumeros()
    .then(numeros => console.log(numeros))