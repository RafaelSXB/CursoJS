require('dotenv').config()
const express = require('express')
const routes = require('./router')
const path = require('path')
const mid = require('./src/middleware/mid')
const app = express();
const mongo = require('mongoose')

mongo.connect(process.env.CONNECTSTRING).then(() => {
    app.emit('sinal')
}).catch(e => console.log(e))

app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(mid)
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')



app.on('sinal', () => {
    app.listen(3000)
})