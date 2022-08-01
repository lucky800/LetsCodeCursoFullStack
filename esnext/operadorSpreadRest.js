const funcionario = {nome: 'Maria', salario:12345.43}
const clone = {ativo: true, ...funcionario}
console.log(clone);

//Usar spread com array
const grupoA = ['Joao', 'Pedro', 'GLoria']
const GrupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(GrupoFinal);

