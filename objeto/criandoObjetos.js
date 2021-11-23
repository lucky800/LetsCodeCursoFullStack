// USANDO A NOTACAO LITERAL
const obj1 = {}
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

// FUNCOES CONTRUTORAS
function produto(nome, preco, desc) {

    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto('Notebook', 2988, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// FUNCTION FACTORY

function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getsalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}



const f1 = criarFuncionario('joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getsalario(), f2.getsalario());

// Object create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// Funcao famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info);