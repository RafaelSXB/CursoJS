const request = (url) =>{fetch( url ).then(response =>{
  if(response.status == '200'){  return response.text() }
}).then(response =>{ resultado(response)})}

const resultado = function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    return request(el.getAttribute('href'));
  }
});
