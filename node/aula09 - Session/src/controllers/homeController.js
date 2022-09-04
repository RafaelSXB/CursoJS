exports.paginaInicial  = (req, res)  =>{
    //console.log(req.session.usuario)
    //console.log(req.flash('teste'))
    res.render('index', {
        titulo: 'Curso JS - Viewer',
        usuario: 'Cliente'
    })
}

exports.form = (req, res) => {
  
   res.render('index', {
    titulo: 'Curso JS - Viewer',
    usuario: req.body.Usuario
   } )
    
}