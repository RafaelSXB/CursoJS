// Classe com atributos
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    
}

// Prototype com metodos
Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`
/* Prototype é utilizado para criar metodo de uma classe, assim não é necessário instanciar o metodo
toda vez que instanciamos um novo objeto, prototype fica alocado na memoria como Pai
objetos instanciados (filhos) apenas referenciam o Pai. */
// Instancia
const p1 = new Pessoa('Luiz', 'W.');
const p2 = new Pessoa('Luan', 'M.');

console.dir(p1)
console.dir(p2)