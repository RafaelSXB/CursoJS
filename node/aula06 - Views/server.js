const express = require('express')
const routes = require('./router')
const path = require('path')

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.listen(3000)