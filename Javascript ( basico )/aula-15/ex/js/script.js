const numero = Number(prompt('Digite um numero: '))
const numeroH1 = document.getElementById("numero1")
let text = document.getElementById("texto")

numeroH1.innerHTML = numero
text += text.innerHTML = `
<p>Raiz quadrada: ${numero ** (1/2)}</p>
<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>
<p>É NaN: ${Number.isNaN(numero)}</p>
<p>Arredondado para baixo: ${Math.floor(numero)}</p>
<p>Arredondado para cima: ${Math.ceil(numero)}</p>
<p>Com duas casas decimais: ${numero.toFixed(2)}</p>
`;

