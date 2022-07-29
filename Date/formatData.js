semana = (sem) => {

    switch (sem) {
        case 0:
            return 'domingo'
            break;
        case 1:
            return 'segunda-feira'
            break;
        case 2:
            return 'terça-feira'
            break;
        case 3:
            return 'quarta-feira'
            break;
        case 4:
            return 'quinta-feira'
            break;
        case 5:
            return 'sexta-feira'
            break;
        case 6:
            return 'sabado'
            break;
    }
}

zeroEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`
}

formataData = (data) => {

    const dia = zeroEsquerda(data.getDate())
    const sema = semana(data.getDay())
    const mes = zeroEsquerda(data.getMonth() + 1)
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const minute = zeroEsquerda(data.getMinutes())
    const second = zeroEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano}/ ${hora}:${minute}:${second} ${sema}`


}




const data = new Date();
const dataBrasil = formataData(data)


console.log(dataBrasil)