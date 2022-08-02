function pessoa(nome){
    return {
        get nome(){
            return nome
        },

        set nome(valor){
            nome = valor
        }
    }
}

const p1 = pessoa

p1.nome = 'Rafael'

console.log(p1.nome)