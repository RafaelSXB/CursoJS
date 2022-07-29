const numbers = [8, 7, 5, 6, 20, 40, 80, 50, 60]


const total = numbers.reduce((acumulador, valor, indice, array) => {
   return acumulador += valor
})


const pessoas = [
    {   nome: 'Luiz', idade: 60 },
    {   nome: 'Maria', idade: 68 },
    {   nome: 'Eduarda', idade: 55 },
    {   nome: 'Leticia', idade: 19 },
    {   nome: 'Rosana', idade: 32 },
    {   nome: 'Wallace', idade: 47 }
]

const velho = pessoas.reduce((acumulador, valor) => {

    if(acumulador.idade > valor.idade) return acumulador;
    return valor
}, 0)
console.log(velho)