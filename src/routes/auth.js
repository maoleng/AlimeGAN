import express from 'express'
import passport from 'passport'
import AuthController from '../app/Http/Controllers/AuthController.js'

const route = express.Router()

route.get('/redirect', passport.authenticate('google', { scope: ['profile','email'] }))
route.get('/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        req.session.authed = req.user

        return res.redirect('/')
    })
route.get('/logout', AuthController.logout)

export default route