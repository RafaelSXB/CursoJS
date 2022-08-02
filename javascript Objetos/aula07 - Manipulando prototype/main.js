function Produto(nome, valor, estoque){
    this.nome = nome
    this.valor = valor
    this.estoque = estoque

}

function Tenis(nome, valor, estoque){
    this.nome = nome
    this.valor = valor
    this.estoque = estoque
}

Produto.prototype.total = 
    function (){
       return this.valor * this.estoque
    }

    const p1 = new Produto('Arroz', 5, 2)
    const t1 = new Tenis('Jordan', 300, 5)
Object.setPrototypeOf(t1, Produto.prototype)



console.log(Produto.prototype)
console.log(t1.total())
