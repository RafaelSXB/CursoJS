const calculo = (n1, n2) =>{
    return new Promise((resolve, reject) => {
        if(typeof n1 !== "number" || typeof n2 !== "number") return reject('Not Number')
       return resolve(n1 + n2)
    })
}

calculo(2, 3).then((resposta) => {
    console.log(resposta)
    return calculo(resposta, 'erro')
}).then((resposta) =>{
    console.log(resposta)
}).catch(e => {
    console.log(e)
})