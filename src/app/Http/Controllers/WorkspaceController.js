import BaseController from './BaseController.js'
import Image from '../../Models/Image.js'

class WorkspaceController extends BaseController
{

    static async index(req, res)
    {
        const images = await Image.find().lean()

        return res.render('workspace', {
            images: images,
        })
    }

    static async update(req, res)
    {
        const image = await Image.findById(req.params._id)
        if (image == null) {
            return res.json({ status: false, message: 'Not found image'})
        }
        await Image.updateOne({ _id: image._id}, {
            isPublic: ! image.isPublic,
        })
        req.session.success = 'Updated successfully'

        return res.redirect('back')
    }

}

export default WorkspaceController