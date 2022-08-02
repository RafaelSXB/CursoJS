// ObjectProperty - Getter e Setter
function Produto(nome, preco, estoque){
    this.nome = nome,
    this.preco = preco,
    
    Object.defineProperty(this, 'estoque', {
       // value: estoque,
        enumerable: true,
        configurable:  true,
        get: function(){
            return estoque
        },
        set: function(valor){
           if (typeof valor !== 'number' ) return
            estoque = valor
        }
        
       // writable: true,
        
    });
}

const p1 = new Produto;

p1.estoque = 2
console.log(p1.estoque)