exports.paginaInicial  = (req, res)  =>{
    res.send(`<form action="/" method="post"> 
    Nome: <input type="texte" name="nome" > 
    <button> Enviar </button>
    </form>` )
    console.log(req.params)
    console.log(req.query)
}

exports.form = (req, res) => {
    res.send(req.body)
    console.log(req.params)
}