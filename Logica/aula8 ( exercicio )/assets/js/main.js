import { formataData } from "./formatData.js";

  const container = document.querySelector('.container')
  const h1 = document.querySelector('.h1')
  const date = new Date();

  function main() {

  
    const hoje = formataData(date)
    h1.innerHTML = hoje;
    
  
  

  

}


setInterval(() => {
  window.onload = main()
}, interval);
