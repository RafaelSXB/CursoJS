const paragrafos = document.querySelector('article')

const list = paragrafos.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body).backgroundColor
console.log(estiloBody)

for (let p of list) {
 
    p.style.cssText =  'color: #ffffff'
    p.style.backgroundColor = estiloBody;
    
}

console.log(list)