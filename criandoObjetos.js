// usando notação literal
/*const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//função construtora

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', '7.99', '0.15')
const p2 = new Produto('Laptop', '7.500', '0.25')
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())*/


// Function Factory - Object

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30- faltas)
        }
    }
}
const f1 = criarFuncionario('jose','10.000','2')
const f2 = criarFuncionario('maria','10.000','2')
console.log(f1.getSalario(), f2.getSalario())

//Object create

const filha = Object.create(null)
filha.nome='Ada'
console.log(filha)

// Uma função famosa que retorna um Objeto de JSON

const fromJSON = JSON.parse('{"nota": "Sou um JSON"}')
console.log(fromJSON.nota)