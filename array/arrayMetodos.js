const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa Quebrou o carro ! remove primeiro elemento
console.log(pilotos);

pilotos.push('Verstappen')//Adciona no final do elemento
console.log(pilotos);

pilotos.shift() //Remove o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift('Hamilton')// Adiciona no primeiro elemento da lista
console.log(pilotos);

//Splice pode Adicionar e remover
//////////// Indice, REMOVER
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

//remover elementos
pilotos.splice(3, 1) //Massa Quebrou
console.log(pilotos);

const algunsPilotos = pilotos.slice(2) // Novo Array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2);
