main = () => {

  const peso = document.querySelector('.peso');
  const altura = document.querySelector('.altura');
  const form = document.querySelector('.form');
  const container = document.querySelector('.container');
  const r = document.createElement('div');
  r.className = 'divResult'
  let result = document.createElement('p');

  calcular = (num1, num2) => {

    num1 = Number(peso.value);

    num2 = Number(altura.value);

    let resultado = num1 / (num2 * num2)
    return resultado.toFixed(1)
    
  }

  resultado = () => {


    let exibir;
    

    if (!peso.value) {

      
      result.style = 'background-color: rgba(255, 0, 0, 0.589); color: red'
      result.value = 'Peso invalido';
      result.innerHTML = result.value;
     


    } else if (!altura.value) {

      result.style = 'background-color: rgba(255, 0, 0, 0.589); color: red'
      result.innerHTML = result.value = 'Altura invalida';

    } else {

      let imc = Number(calcular());

      if (imc < 18.5) {

        exibir = `O seu IMC é ${imc}, abaixo do peso`;
        result.style = 'background-color: rgba(0, 180, 255); color: blue';
        result.innerHTML = result.value = exibir;

      } else if ((imc == 18.5) || (imc <= 24.9)) {

        exibir = `O seu IMC é ${imc}, Peso Normal`;
        result.style = 'background-color: rgba(0, 180, 255); color: blue';
        result.innerHTML = result.value = exibir;

      } else if ((imc == 25) || (imc <= 29.9)) {

        exibir = `O seu IMC é ${imc}, SobrePeso`;
        result.style = 'background-color: rgba(0, 180, 255); color: blue';
        result.innerHTML = result.value = exibir;

      } else if ((imc == 30) || (imc <= 34.9)) {

        exibir = `O seu IMC é ${imc}, Obesidade grau 1`;
        result.style = 'background-color: rgba(0, 180, 255); color: blue';
        result.innerHTML = result.value = exibir;

      } else if ((imc == 35) || (imc <= 39.9)) {

        exibir = `O seu IMC é ${imc}, Obesidade grau 2`;
        result.style = 'background-color: rgba(0, 180, 255); color: blue';
        result.innerHTML = result.value = exibir;

      } else {

        exibir = `O seu IMC é ${imc}, Obesidade Grau 3`;
        result.style = 'background-color: rgba(0, 180, 255); color: blue';
        result.innerHTML = result.value = exibir;

      }
    }


    r.appendChild(result)
    container.appendChild(r)
    return result;
  }

  AtualizarForm = (evento) => {


    evento.preventDefault();
  }

  form.addEventListener('submit', resultado)
  form.addEventListener('submit', AtualizarForm);
}


main();