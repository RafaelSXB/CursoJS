
/*const fizz = () => {

    for(let i = 0; i <= 100; i++){

      if( i % 3 === 0 && i % 5 === 0) console.log(`${i} FizzBuzz`)
      else if ( i % 3 === 0) console.log(`${i} Fizz`)
      else if ( i % 5 === 0) console.log(`${i} Buzz`)
      else console.log(i)

    }
    

}

fizz();
*/

let data = new Date()

console.log(data.toLocaleTimeString('pt-BR',
{
    hour: 'numeric',
    second: '2-digit',
    minute: '2-digit',
    hour12: true
}))