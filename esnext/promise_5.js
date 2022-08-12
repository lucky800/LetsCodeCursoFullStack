function funcionarOuNap(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{
            con
            if (Math.random() < chanceErro) {
                reject('Erro')
            }else{
                resolve('Valor')
            }
        }catch(e){
            resolve(e)
        }
    })
}
funcionarOuNap('test1', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => console.log,
        err => console.log(`Erro especifico ${err}`)
        )
    .catch(err => console.log(`erro: ${err}`))
    .then(()=>console.log('fim'))