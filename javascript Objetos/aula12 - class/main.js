class Pessoa{
    constructor(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    }

   get nomeCompleto(){
    return this.nome + ' ' + this.sobrenome
   }

   set nomeCompleto(valor){
        
      valor = valor.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join()
   }
    
}

class motorista extends Pessoa{
    constructor(nome, sobrenome, veiculo){
        super(nome, sobrenome)
        this.veiculo = veiculo
    }
}

const mt = new motorista('Rafael', 'Bento', 'Moto')

console.log(mt.nomeCompleto + ' ' + mt.veiculo)

console.log(mt)
console.log(motorista.prototype)