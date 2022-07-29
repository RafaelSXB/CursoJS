main = () =>{

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    const pessoas = []
    
   /* form.onsubmit = (evento) => {
        evento.preventDefault();
    }
*/  
    recebeEventoForm = (evento) =>  {
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        
        const pessoa =  {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }
        pessoas.push(pessoa)

        resultado.innerHTML += (`<p>${pessoa.nome}  ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p>`)
        console.log(pessoas)
        
    }
    
    form.addEventListener('submit', recebeEventoForm);
}

main();