//Object.preventExtension
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
//En este metodo se puede excluir y modificar, pero no agregar
produto.nome -'Borracha'
produto.descricao = 'Borracha escolar'
//delete produto.tag
console.log(produto)

//Object.seal
//En este solo se puede alterar el atributo, no agregar ni excluir
const pessoa = {nome: 'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

// Object.freeze 
//Con este no sepuede ni agregar, excluir ni modificar.

