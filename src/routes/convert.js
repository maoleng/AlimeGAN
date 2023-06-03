import express from 'express'
import ConvertController from '../app/Http/Controllers/ConvertController.js'

const route = express.Router()

route.get('/', ConvertController.index)

export default route