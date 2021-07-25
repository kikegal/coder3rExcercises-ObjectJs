const pessoa = {
    nome: 'Maria',
    idade: 2,
    peso:13
}

/*console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) =>{  //usando [] usamos un destructuring para recorrer el objeto tambien
    console.log(`${chave}: ${valor}`)

})*/
//Definir un atributo o propiedad a un objeto

Object.defineProperty(pessoa,'dataNascimento',{  //cuidado con defineProperies !!!!
    enumerable: false,   //con esto definimos cuales keys podrán verse y determinar una variable como constante fija
    writable: false,
    value: '01/01/2019'
})
console.log(pessoa.dataNascimento)

//Object Assign

const dest = { a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj) //por el freeze no se puede cambiar el valor de c
obj.c = 1223
console.log(obj)