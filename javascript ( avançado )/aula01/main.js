//Global

function retornaFuncao() {
    //Escopo Mãe
    const nome = 'teste'
    return function(){
    //Escopo filho
        return nome
    }
}

const funcao = retornaFuncao()
console.log(funcao())