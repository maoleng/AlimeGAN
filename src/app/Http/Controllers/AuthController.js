import BaseController from './BaseController.js'
import User from '../../Models/User.js'

class AuthController extends BaseController
{

    static async callback (accessToken, refreshToken, profile, done) {
        const auth = {
            name: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value
        }
        let user = await User.findOne({email: auth.email})
        if (user === null || user === undefined) {
            return done(null, await User.create(auth))

        }
        auth.lastLoginAt = Date.now()
        await User.updateOne({email: auth.email}, auth)

        return done(null, user)

    }

}

export default AuthController