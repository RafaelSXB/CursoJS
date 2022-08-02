function Pessoa(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    Object.defineProperties(this, {
        'nome': {
            enumerable: true,
            writable: false,
            configurable: false
        },

        'idade': {
            enumerable: true,
            writable: false,
            configurable: false
        },

        'sobrenome': {
            enumerable: false,
            writable: false,
            configurable: false
        }
    } )
}
const p1 = new Pessoa('1', '2', '3');

console.log(p1)
