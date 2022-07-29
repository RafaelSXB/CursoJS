// Factory Object
function pessoaNova(nome, sobremo){
    return {
        nome,
        sobremo
    }
}
const p1 = pessoaNova('tste', 'asd')
console.log(p1)


// Constructor Object
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}
const p2 = new Pessoa('cons', 'trutor')
console.log(p2)


// Object.freeze(this) 'Trava o valores dentro do objeto' 