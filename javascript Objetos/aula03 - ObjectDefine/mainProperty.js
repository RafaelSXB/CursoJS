// ObjectProperty
function Pessoa(nome, sobrenome, idade){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade,
    
    Object.defineProperty(this, 'endereco', {
        value: 'teste',
        enumerable: true,
        writable: false,
        configurable: false
    });
}

const p1 = new Pessoa;

console.log(Object.keys (p1))