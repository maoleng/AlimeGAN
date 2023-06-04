import BaseController from './BaseController.js'

class AuthController extends BaseController
{

    static async callback (accessToken, refreshToken, profile, done) {
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            image: profile.photos[0].value,
            email: profile.emails[0].value
        }
        console.log(newUser)
    }

}

export default AuthController