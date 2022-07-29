const  frutas = ['pera', 'uva', 'laranja']
const pessoa = {
    nome: 'rafael',
    idade: 3,
    cidade: 'sorocaba',
    endereco: {
        rua: 'mario nogueira',
        numero: 278
    }
}
/*for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}*/


/*for (let i in frutas){
    console.log(frutas[i])
} // Lê os indices da váriavel
*/


/*for (const key in pessoa) {
    if (pessoa.hasOwnProperty.call(pessoa, key)) {
   const element = pessoa[key];
        console.log(element)
    }
}
*/

for (key in pessoa){
    console.log(pessoa[key])
}

for (valor of frutas) {
    console.log(valor)
}

frutas.forEach((a, b ,c) => {
    console.log(a, b, c)
})