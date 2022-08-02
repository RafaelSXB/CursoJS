/*
Metodo 1 - Obeject Assign
Metodo 2 - Object getOwnPropertyDescriptor
*/

// Objetos são passados por referencia, mutáveis
const produto = { nome: 'Tijolo' }
const tijolo = produto
produto.nome = 'telha'
console.log(tijolo) 
// Produto e tijolo, tem o mesmo valor


// Criando nova referencia na memomria
const tijoloAlterado = { 
    ...produto,
    quantidade: 2
}
tijoloAlterado.nome = 'Cimento'
console.log(tijoloAlterado)
// Copiado chaves do produto e adicionado nova chave

// Object.assign(Cria objeto, adiciona outros objetos no objeto vazio)
const mouse = Object.assign({}, produto, { material: 'plastico'})
mouse.nome = 'mouse'
console.log(mouse)

// Object.getOwnPropertyDescriptor(obj - chaves cujos quer retorna a configuração)
console.log(Object.getOwnPropertyDescriptor(mouse, 'nome'))

// Object.getOwnPropertyDescriptor(obj - retorna configuração de todas as chaves)
console.log(Object.getOwnPropertyDescriptors(mouse))

const teste = { nome: 'teste', number: 1 }
// Retorna chaves dos objeto
console.log(Object.keys(teste))

// Retorna valores do objeto
console.log(Object.values(teste))

// Retorna valores / chaves do objeto 
console.log(Object.entries(teste))