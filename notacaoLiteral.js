const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b:b, c:c} //versão antiga
const obj2 = {a, b, c}

console.log(obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

//outra forma

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//também adicionando funções dentro de um objeto

const obj5 = {
    creaFuncao(){
        
    }
}
