import express from 'express'
import passport from 'passport'

const route = express.Router()

route.get('/redirect', passport.authenticate('google', { scope: ['profile','email'] }))
route.get('/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/log')
    })

export default route