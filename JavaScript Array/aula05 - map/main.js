const numbers = [8, 7, 5, 6, 20, 40, 80, 50, 60]


const dobrado = numbers.map(valor =>{
    return valor * 2
})



const pessoas = [
    {   nome: 'Luiz', idade: 60 },
    {   nome: 'Maria', idade: 23 },
    {   nome: 'Eduarda', idade: 55 },
    {   nome: 'Leticia', idade: 19 },
    {   nome: 'Rosana', idade: 32 },
    {   nome: 'Wallace', idade: 47 }
]

const retornaNome = pessoas.map(valor => {
    return valor.nome
})

const retornaChave = pessoas.map((valor, indice, array) => {
    delete valor.nome
    return valor
})

const retornaID = new Array ( pessoas.map((valor, indice) => {
    valor.id = indice
    return (valor)
}))

console.log(retornaChave)