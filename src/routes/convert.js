import express from 'express'
import ConvertController from '../app/Http/Controllers/ConvertController.js'

const route = express.Router()

route.get('/', ConvertController.index)
route.post('/', ConvertController.convert)
route.get('/result/:_id', ConvertController.showResult)


export default route