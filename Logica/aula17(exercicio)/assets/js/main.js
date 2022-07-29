const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const relogio = document.querySelector('p')
let segundos = 0
let minutos = 0
let horas = 0


function zeroSegunda() {

    segundos <= 9 ? segundos = '0' + segundos : segundos
}

function zeroMinute() {
    minutos <= 9 ? minutos = '0' + minutos : minutos
}

function zeroHora() {
    horas <= 9 ? horas = '0' + horas : horas
}

function formataHora() {

    segundos = 0
    minutos = 0
    horas = 0
    zeroMinute()
    zeroSegunda()
    zeroHora()
    relogio.textContent = `${horas}:${minutos}:${segundos}`
}


function mudarMinute() {
    minutos++
    zeroMinute()
    segundos = 00
}


function mudarHora() {
    horas++
    zeroHora()
    minutos = 00
}




iniciar.addEventListener('click', () => {
    relogio.style.cssText = "color: black;"
    intervalo = setInterval(function () {
        segundos == 60 ? mudarMinute() : zeroSegunda(segundos++)
        minutos == 60 ? mudarHora() :
            relogio.textContent = `${horas}:${minutos}:${segundos}`
        relogio.innerHTML

    }, 1);



})

pausar.addEventListener('click', () => {

    clearInterval(intervalo)
    relogio.style.cssText = "color: red;"


})

zerar.addEventListener('click', () => {
    relogio.style.cssText = "color: black;"
    formataHora()

    relogio.innerHTML

})


formataHora()