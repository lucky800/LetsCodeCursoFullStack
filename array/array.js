console.log(typeof Array, typeof new Array, typeof[]);

let aprovados = new Array('Lucas', 'Maysa', 'Regiane')
console.log(aprovados);

aprovados = ['Lucas', 'Maysa', 'Regiane']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[3]);

aprovados[3] = 'Marcelo'
aprovados.push('Douglas')
console.log(aprovados.length);

aprovados[9] = 'Marcela'

console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort() // altera a ordem definida
console.log(aprovados);

delete aprovados[1]
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Lucas', 'Maysa', 'Regiane']
//aprovados.splice(1, 1)
//aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
aprovados.splice(1, 1, 'Elemento1') 
console.log(aprovados);