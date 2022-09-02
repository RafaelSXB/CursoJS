const express = require('express')
const app = express();

// Crud - CREATE, READ, UPDATE, DELETE
//         POST,  GET,   PUT     DELETE


app.get('/', (req, res) =>{
    res.send('Hello World, <a href="/sobre">sobre</a>' )
});

app.get('/sobre', (req, res) => {{
    res.send('Sobre a pagina, teste')
}})
app.listen(3000)