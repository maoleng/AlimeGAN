import BaseController from './BaseController.js'

class ConvertController extends BaseController
{

    static index(req, res)
    {
        return res.render('convert')
    }

}

export default ConvertController