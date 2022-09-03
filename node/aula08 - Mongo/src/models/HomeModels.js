const mongo = require('mongoose')

const HomeSchema = mongo.Schema({
    titulo: { type: String, required: true},
    descricao: String
})

const HomeModel = mongo.model('Home', HomeSchema)

module.exports = HomeModel