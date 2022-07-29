/*const pessoa = {
    nome: "João",
    sobrenome: "",
    idade: 20
};

console.log(pessoa.nome);
*/

criaPessoa = (nome, sobrenome, idade) => {

    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,

        fala(){
            console.log(`Meu idade é ${this.idade}`)
        },

        incrementa(){
            this.idade++
        }
    }
};

const pessoa = criaPessoa('Maria', 'Miranda', 80);
pessoa.fala()
pessoa.incrementa()
pessoa.fala()
pessoa.incrementa()
pessoa.fala()
pessoa.incrementa()
pessoa.fala()
pessoa.incrementa()
pessoa.fala()