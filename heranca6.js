function Aula (nome, IDvideo){
    this.nome = nome
    this.IDvideo = IDvideo
}

const aula1 = new Aula('Bemvindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)

//simulando o new

function novo (f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo (Aula, 'Bienvenido', 123)
const aula4 = novo (Aula, 'Aceptado', 456)

console.log(aula3, aula4)