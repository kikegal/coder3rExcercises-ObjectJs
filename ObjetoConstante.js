// el nombre de la const apunta a una direccion, dentro de esa direccion ya es otro nivel
 const pessoa = {
     nome:"Juan"
 }
 this.nome = "Pedro" //el this hace publica esa variable

 console.log(pessoa)
 //pessoa = {nome:"Maria"} por eso esta const pessoa no puede cambiar

 Object.freeze(pessoa) //con esto se blinda o congela el objeto y que no pueda modificarse

 console.log(pessoa)