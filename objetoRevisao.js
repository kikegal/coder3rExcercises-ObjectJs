//Coleção dinámica de pares chave/valor

const produto = new Object // creamos el objeto a partir de su función (objeto é uma función). Usando new creamos una function constructora
produto.nome = 'Cadeira' //por ser dinámica, a partir de esa creación constructora podemos declarar los parámetros o elementos como nome
produto['marca do produto'] = 'Genérica'//otra forma de declarar también
produto.preco = 228

console.log(produto)
delete produto.preco //Como es dinámico, también se pueden excluir valores mediante el delete
delete produto ['marca do produto']
console.log(produto)

//Objeto com varios objetos ou atributos diferentes internos

const carro ={
    modelo: 'A4',
    valor: 89000,
    propietario: {
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 29
    }, {
        nome: 'Ana',
        idade: 42
    }], 
    calcularValorSeguro: function(){
        //...
    }

}

carro.propietario.endereco.numero = 1000 //De esta forma accesamos a los atributos, cuando sabemos el nombre del atributo
carro['propietario'] ['endereco'] ['logradouro'] = 'Av Cigana' //Otra forma de accesar es esta por parámetos de string, útil cuando no tenemos el nombre del atributo

console.log(carro)

delete carro.condutores
delete carro. propietario.endereco
delete carro.calcularValorSeguro

console.log (carro)
