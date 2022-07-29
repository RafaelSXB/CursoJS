export function semana (sem)  {

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

export function meses (me) {

    switch (me) {
        case 0:
            return 'janeiro'
            break;
        case 1:
            return 'fevereiro'
            break;
        case 2:
            return 'março'
            break;
        case 3:
            return 'abril'
            break;
        case 4:
            return 'maio'
            break;
        case 5:
            return 'junho'
            break;
        case 6:
            return 'julho'
            break;
        case 7:
            return 'agosto'
            break;
        case 8:
            return 'setembro'
            break;
        case 9:
            return 'outubro'
            break;
        case 10:
            return 'novembro'
            break;
        case 11:
            return 'dezembro'
            break;
    }
}

export function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

export function formataData(data){

    const dia = zeroEsquerda(data.getDate())
    const sema = semana(data.getDay())
    const mes = meses(data.getMonth() + 1)
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const minute = zeroEsquerda(data.getMinutes())
    const second = zeroEsquerda(data.getSeconds())

    return `${sema}, ${dia} de ${mes} de ${ano} ${hora}:${minute}`


}


