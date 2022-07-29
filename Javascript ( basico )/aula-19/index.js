/*
Dados primitivos são imutáveis - String, number, boolean, undefied
null 

Dados Referências mutável - Array, object, function
*/

const teste = ['teste', 'teste2']

const teste1 = teste
const teste2 = [...teste]
teste[0] = 'arroz'
console.log(teste, teste1, teste2)