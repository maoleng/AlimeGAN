import express from 'express'
import SiteController from '../app/Http/Controllers/SiteController.js'

const route = express.Router()

route.get('/', SiteController.index)
route.get('/gallery', SiteController.gallery)

export default route