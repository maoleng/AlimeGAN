import express from 'express'
import WorkspaceController from '../app/Http/Controllers/WorkspaceController.js'

const route = express.Router()

route.get('/', WorkspaceController.index)
route.put('/:_id', WorkspaceController.update)

export default route