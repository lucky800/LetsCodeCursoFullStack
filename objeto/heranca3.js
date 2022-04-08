const pai = {nome: 'pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai);
console.log(filha1.nome = 'Ana');
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome);
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem o cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha2));
console.log(Object.keys(filha1));