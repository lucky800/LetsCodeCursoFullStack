Array.prototype.forEach2 = function(callBack){
    for (let i = 0; i < this.length; i++) {
        callBack(this[i], i, this) 
    }
}


const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2((nome, indice) => {
    console.log(`${indice + 1}) ${nome}`);
})