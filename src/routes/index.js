import site from './site.js'
import convert from './convert.js'
import auth from './auth.js'
import workspace from './workspace.js'
import MustLogin from '../app/Http/Middlewares/MustLogin.js'

function registerRoutes(app)
{
    app.use('/', site)
    app.use('/auth', auth)
    app.use('/convert', convert)
    app.use('/workspace', MustLogin.handle, workspace)

}

export default registerRoutes