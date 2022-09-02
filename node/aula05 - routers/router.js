const express = require('express')
const route = express.Router();
const home = require('./controllers/homeController')

route.get('/:teste?', (home.paginaInicial))
route.post('/', (home.form))

module.exports = route;