import bootstrap from './providers/bootstrap.js'
import express from 'express'
import 'dotenv/config'

const app = express()

// Bootstrap the application
bootstrap(app)

// Start the server
app.listen(3000)
