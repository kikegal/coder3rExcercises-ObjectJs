console.log( typeof String)
console.log(typeof Array)
console.log( typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join('') //.split es para generar un array a partir de un string. Con reverse se orena al contrario y con .join eso que se reordenó se establece como nueva string a mostrar

}                                       //NOTA: Para accesar a los metodos string y array es con this

console.log('Enrique Garcia'.reverse())

Array.prototype.first = function(){
    return this[0]
}
console.log([1,2,3,4].first())
console.log(['a','b','c','d'].first())