import site from './site.js'
import convert from './convert.js'
import auth from './auth.js'
import workspace from './workspace.js'

function registerRoutes(app)
{
    app.use('/', site)
    app.use('/auth', auth)
    app.use('/convert', convert)
    app.use('/workspace', workspace)

}

export default registerRoutes