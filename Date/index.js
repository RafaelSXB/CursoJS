/*const tres = 60 * 60 * 3 * 1000;
const oneDay = 60 * 60 * 24 * 1000; // Segundos, Minutos, Horas em Milesimos de segundos.
const data = new Date(0 + tres); // 01/01/1970*/

//const data = new Date(2019, 3, 20, 15, 14, 27, 800) // a, m , d, h, m, s, ms

/*const data = new Date('2019-05-20 20:50:30')

console.log('Dia', data.getDate())
console.log('Dia da semana', data.getDay())
console.log('Mês', data.getMonth())
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('Mile', data.getMilliseconds())
console.log(data.toString());
*/

const data = new Date().toString()


const now = Date.now();
console.log(Date(now).toString())


