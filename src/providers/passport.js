import passportGoogleOAuth2 from 'passport-google-oauth20'
import AuthController from '../app/Http/Controllers/AuthController.js'

const GoogleStrategy = passportGoogleOAuth2.Strategy

export default function (passport) {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_SECRET_ACCESS_KEY,
                callbackURL: '/auth/callback',
            },
            AuthController.callback
        )
    )

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {

    })
}