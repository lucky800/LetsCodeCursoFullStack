for(let letra of 'Lucas'){
    console.log(letra);
}

const assuntosECMA = ['map', 'Set', 'promise']
for(let i in assuntosECMA){
    console.log(i);
}

for(let assunto of assuntosECMA){
    console.log(assunto);
}

const assuntoMAP = ([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
]) 

for(let assunto of assuntoMAP){
    console.log(assunto);
}

for(let chave of assuntoMAP.keys()){
    console.log(chave);
}