import { exec } from 'child_process'
import site from './site.js'
import convert from './convert.js'

function registerRoutes(app)
{
    app.use('/', site)
    app.use('/convert', convert)

}

export default registerRoutes