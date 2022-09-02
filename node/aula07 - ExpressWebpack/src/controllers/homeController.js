exports.paginaInicial  = (req, res)  =>{
    res.render('index')
}

exports.form = (req, res) => {
    res.send(req.body)
    console.log(req.params)
}