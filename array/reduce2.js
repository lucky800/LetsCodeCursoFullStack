const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Anahy', nota: 8.7, bolsista: true }
]

//desafio 1 Todos os alunos sao bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//desafio2 Algum aluno é bolsista ?
const algumBolsista = (resultado, bolsista) => resultado ||  bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));