class MustLogin
{

    static handle(req, res)
    {
        if (req.session.authed == null) {
            req.session.error = 'You must login first'
            return res.redirect('/')
        }

        return res.next()
    }

}

export default MustLogin