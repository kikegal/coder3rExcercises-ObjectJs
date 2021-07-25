class Lancamento {
    constructor(nome= 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = [] //a partir de la creación de esta variable con array se crean las siguientes funciones dentro de la clase
    }

    addLancamentos(...lancamentos){ //traduccion; ... recibir uno o mas x (en este caso lancamentos)
        lancamentos.forEach(l => this.lancamentos.push(l)) //Para cada lancamento agregue un elemento al array
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

