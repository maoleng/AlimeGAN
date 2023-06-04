import express from 'express'
import passport from 'passport'

const route = express.Router()

route.get('/redirect', passport.authenticate('google', { scope: ['profile','email'] }))
route.get('/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        req.session.user = req.user

        return res.redirect('/')
    })

export default route