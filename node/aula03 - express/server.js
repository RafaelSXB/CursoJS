const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
    res.send(req.body)
    console.log(req.body)
})
app.get('/', (req, res) =>{
    res.send(`<form action="/" method="post"> 
    Nome: <input type="texte" name="nome" > 
    <button> Enviar </button>
    </form>` )
});

app.get('/sobre/:teste?', (req, res) => {{
    res.send('Sobre a pagina, teste')
    console.log(req.params)
    console.log(req.query)
}})
app.listen(3000)