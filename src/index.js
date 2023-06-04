import dotenv from './config/env.js'
import express from 'express'
import bootstrap from './providers/bootstrap.js'

const app = express()

// Bootstrap the application
bootstrap(app)

// Start the server
app.listen(3000)
