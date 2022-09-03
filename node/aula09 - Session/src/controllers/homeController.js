exports.paginaInicial  = (req, res)  =>{
    console.log(req.session.usuario)
    console.log(req.flash('teste'))
    res.render('index')
}

exports.form = (req, res) => {
    res.send(req.body)
    console.log(req.params)
}