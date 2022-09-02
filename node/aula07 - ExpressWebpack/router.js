const express = require('express')
const route = express.Router();
const home = require('./src/controllers/homeController')

route.get('/', (home.paginaInicial))
route.post('/', (home.form))

module.exports = route;