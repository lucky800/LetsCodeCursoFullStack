function imprimiNomeCompleto(nome) {
    return function(){
        console.log(nome, "Teshima");
    }
}

function incializa() {
    let nome = 'Ayrton'
    console.log("Primeiro");
    setTimeout(imprimiNomeCompleto(nome), 1000)
}

incializa();