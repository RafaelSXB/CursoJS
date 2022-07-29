main = () => {

    const elementos = [
      {tag: 'p', texto: 'Frase 1'},
      {tag: 'div', texto: 'Frase 2'},
      {tag: 'footer', texto: 'Frase 3'},
      {tag: 'section', texto: 'Frase 4'},
    ]

    const section = document.createElement('section');
    section.className = 'container';

    const body = document.querySelector('body');

    for (let i = 0; i < elementos.length; i++) {
      const doc = document.createElement(elementos[i].tag);
      doc.textContent = elementos[i].texto; /* Alterarnativa criar elemento de texto document.creatTextNode*/
      section.appendChild(doc);
    }
  
    body.appendChild(section).innerHTML;
}


main();