import { exec } from 'child_process'
import site from './site.js'

function registerRoutes(app)
{
    app.use('/', site)

}

export default registerRoutes