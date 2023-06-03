import BaseController from './BaseController.js'

class SiteController extends BaseController
{

    static index(req, res)
    {
        return res.render('index')
    }

}

export default SiteController