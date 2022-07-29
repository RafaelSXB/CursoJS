main = () => {

    const form = document.querySelector('.form');

    AtualizarForm = (evento) =>{
        evento.preventDefault();


    }
    
  form.addEventListener('submit', AtualizarForm);
}


main();