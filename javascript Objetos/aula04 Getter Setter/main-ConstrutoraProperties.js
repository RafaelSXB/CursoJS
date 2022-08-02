function CriaPessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    Object.defineProperties(this, {
        'nome': {
            get: function(){
                return nome
            },
            set: function(valor){
                nome = valor
            }
        }
    })
}

const p1 = new CriaPessoa

p1.nome = 'Mario'

console.log(p1.nome)