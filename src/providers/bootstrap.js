import express from 'express'
import session from 'express-session'
import methodOverride from 'method-override'
import { engine } from 'express-handlebars'
import registerRoutes from '../routes/index.js'
import connectDatabase from '../config/database.js'

function bootstrap(app)
{
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    app.use(express.static('src/public'))

    app.engine('handlebars', engine())
    app.set('view engine', 'handlebars')
    app.set('views', './src/resources/views')

    app.use(methodOverride('_method'))

    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    }))

    connectDatabase()
    registerRoutes(app)
}

export default bootstrap