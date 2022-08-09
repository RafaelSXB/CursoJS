// Produto - aumento e desconto
// camiseta = cor, caneca = material

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.porcento = function(valor){
    this.preco += this.preco * (valor / 100)
}
Camiseta.prototype.constructor = Camiseta

function Caneca(nome, preco, cor, material){
    Camiseta.call(this, nome, preco, cor)
    this.material = material
}
Caneca.prototype = Object.create(Camiseta.prototype)
Caneca.prototype.constructor = Caneca
const k1 = new Caneca('One Piece', 20, 'Branca', 'Plastico')
const p1 = new Produto('Produto', 4)
const c1 = new Camiseta('Nike', 90, 'Branca')