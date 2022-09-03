const { title } = require('process')
const HomeModel = require('../models/HomeModels')

HomeModel.create({
    titulo: 'Curso',
    descricao: 'Curso JS'
}).then((mongo) =>{
    console.log(mongo)
}).catch((e) => console.log(e))


exports.paginaInicial  = (req, res)  =>{
    res.render('index')
}

exports.form = (req, res) => {
    res.send(req.body)
    console.log(req.params)
}