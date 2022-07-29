const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const relogio = document.querySelector('p')
let segundos = 0


function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}


iniciar.addEventListener('click', () => {
    relogio.style.cssText = "color: black;"
    intervalo = setInterval(function () {
    
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);

    }, 1);



})

pausar.addEventListener('click', () => {

    clearInterval(intervalo)
    relogio.style.cssText = "color: red;"


})

zerar.addEventListener('click', () => {

    relogio.style.cssText = "color: black;"
    relogio.innerHTML = criaHoraDosSegundos(segundos = 0)

})

