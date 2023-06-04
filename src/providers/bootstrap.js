import express from 'express'
import session from 'express-session'
import methodOverride from 'method-override'
import { engine } from 'express-handlebars'
import registerRoutes from '../routes/index.js'
import connectDatabase from '../config/database.js'
import passport from 'passport'
import initializePassport from './passport.js'
import boosterHandlebars from "./handlebars.js";

function bootstrap(app)
{
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    app.use(express.static('src/public'))

    boosterHandlebars(app)

    app.use(methodOverride('_method'))

    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    }))

    initializePassport(passport)
    app.use(passport.session())

    connectDatabase()
    registerRoutes(app)
}

export default bootstrap