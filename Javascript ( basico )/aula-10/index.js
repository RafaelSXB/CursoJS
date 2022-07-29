let A = 'A'
let B = 'B'
let C = 'C'

const temp = C

C = A 
A = B
B = temp
console.log(A, B , C)