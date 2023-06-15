class MustLogin
{

    static handle(req, res, next)
    {
        if (req.session.authed == null) {
            req.session.error = 'You must login first'
            return res.redirect('/')
        }

        return next()
    }

}

export default MustLogin