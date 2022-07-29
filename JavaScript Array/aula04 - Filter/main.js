// Filter -> Sempre retornar array, com mesma quantidade de elementos ou menos


/*const numbers = [8, 7, 5, 6, 20, 40, 80, 50, 60]


callback = (valor, indice, array) =>{

    return valor > 10 

}
console.log(numbers.filter(callback))
*/

const pessoas = [
    {   nome: 'Luiz', idade: 60 },
    {   nome: 'Maria', idade: 23 },
    {   nome: 'Eduarda', idade: 55 },
    {   nome: 'Leticia', idade: 19 },
    {   nome: 'Rosana', idade: 32 },
    {   nome: 'Wallace', idade: 47 }
]


const a = pessoas.filter((pessoa) =>{

    return pessoa.nome.length >= 5
})

const b = pessoas.filter((pessoa) => {
    return pessoa.idade > 50
})

const c = pessoas.filter(pessoa => {
   // return pessoa.nome.slice(-1) == 'a'  por slice

   // Biblioteca do javascript

    // Transforma em minusculo e posteriomente retorna terminados em 'a'
   return pessoa.nome.toLocaleLowerCase().endsWith('a');
})
console.log(c)