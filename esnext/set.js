const { times } = require("lodash")

//Nao Aceita repeticao/NaoIndexada
const time = new Set()
time.add('Vasco')
time.add('Sao paulo').add('Palmeiras').add('corinthians')
time.add('Flamengo')
time.add('Vasco')

console.log(time);
console.log(time.size);
console.log(time.has('Vasco'));
time.delete('Flamengo')
console.log(time.has('Flamengo'));


const nomes = ['Lucas', 'Maysa', 'Regiane', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet);