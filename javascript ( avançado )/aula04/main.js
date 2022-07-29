// Factory function ( Função Fábrica )
function criaPessoa(nome, sobrenome, idade, a, p, valor){

    return {
        nome,
        sobrenome,
        idade,
        altura: a,
        peso: p,
        
        get fala(){
            return`${this.nome} está falando.`
        },
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        },
        get completo(){
                
            return `${this.nome} ${this.sobrenome}`
        },

        set completo(valor){

            return this.sobrenome = this.sobrenome + " " +  valor
        }
    }
}

const p1 = criaPessoa('Rafael', 'Bento', '25', 1.80, 85 )

p1.completo = 'Silva'
console.table(p1)



