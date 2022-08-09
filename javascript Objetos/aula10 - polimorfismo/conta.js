function Conta(agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function (x){
    if(this.saldo < x){
        return console.log('Saldo insuficiente')
    }

    this.saldo -= x
}
Conta.prototype.depositar = function (x){
    this.saldo += x
    this.verSaldo()
}
Conta.prototype.verSaldo = function (){
    console.log(`Ag/c ${this.agencia} / ${this.conta} | Saldo: R$${this.saldo}`)
}

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(x){
    if((this.saldo + this.limite) < x ) return console.log('Saldo insuficiente')
    this.saldo -= x
    this.verSaldo()
    
}

const cc = new ContaCorrente(01, 30, 500, 1000)
cc.sacar(1500)
console.log(cc)



