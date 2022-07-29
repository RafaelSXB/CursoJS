// Objeto Literal
const pessoa =  {
    nome: 'teste',
    idade: 2
}

// Chamada com . referencia
pessoa.idade

// Chamada com dinamismo 
const nome = pessoa.nome
pessoa[nome]
pessoa['nome']


/********************************** */

// Objeto Construtor 
const pessoa1 = new Object();


// Apagar atributo do objeto
//delete pessoa.nome

// Metodo do objeto
pessoa.falar = function() {console.log(`${this.nome} falando oi` )}

console.log(pessoa.falar())