// Função construtora - cria objetos
// Função fabrica - retorna objetos
// Contrutura - Sempre maiusculo ex: Pessoa (new pessoa)

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome;
}


const p1 = new Pessoa('Rafael', 'Bento')