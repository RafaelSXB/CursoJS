require('dotenv').config()
const express = require('express')
const routes = require('./router')
const path = require('path')
const mid = require('./src/middleware/mid')
const app = express();
const mongo = require('mongoose')

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const sessionOptions = session({
    secret: 'asdasdqwewqewtreçtert',
    store:  MongoStore.create({ mongoUrl: process.env.CONNECTSTRING, touchAfter: 24 * 3600 }),
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 1,
        httpOnly: true
    }
})

mongo.connect(process.env.CONNECTSTRING).then(() => {
    app.emit('sinal')
}).catch(e => console.log(e))


app.use(express.urlencoded({
    extended: true
}))

app.use(sessionOptions)
app.use(flash())
app.use(routes)
app.use(mid)
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')



app.on('sinal', () => {
    app.listen(3000)
})