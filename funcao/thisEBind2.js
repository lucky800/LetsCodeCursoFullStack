function pessoa() {
    this.idade = 0;
    //Dispara outra funcao com o tempo determinado
    const self = this;
    setInterval(function(){
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000)
}

new pessoa