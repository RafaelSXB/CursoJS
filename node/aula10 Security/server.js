// Bibliotecas
require('dotenv').config()
const express = require('express')
const routes = require('./router')
const path = require('path')
const { csrfTokenError, csrfToken } = require('./src/middleware/mid')
const app = express();
const mongo = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
const helmet = require('helmet')
const csurf = require('csurf')

app.use(helmet())
// Indicando a utilização dos parametros Form
app.use(express.urlencoded({
    extended: true
}))

// Arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')))

// Configuração Conexão MongoDB
mongo.connect(process.env.CONNECTSTRING).then(() => {
    app.emit('sinal')
}).catch(e => console.log(e))

// Confinguração Sessões
const sessionOptions = session({
    secret: 'asdasdqwewqewtreçtert',
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTSTRING,
        touchAfter: 24 * 3600
    }),
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 1,
        httpOnly: true
    }
})



// Sessões e Flash
app.use(sessionOptions)
app.use(flash())



// Segurança
app.use(csurf())

// Middleware
app.use(csrfTokenError)
app.use(csrfToken)

// Rotas
app.use(routes)

// Views com EJS
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')


// Subindo porta do servidor, após conexão com mongoDB
app.on('sinal', () => {
    app.listen(3000)
})