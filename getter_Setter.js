const sequencia = {
    _valor: 1, //convenção; al poner _ se avisa que el valor de esa variable esta restricta a esta funcion
    get valor(){ return this._valor++},
    set valor(valor) { 
        if (valor > this._valor){  //con esto se valida que siempre la sequencia sea en positivo, hacia el frente
        this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900  // no va a comenzar desde un numero menor al anterior, para eso el get y e set
console.log(sequencia.valor)
