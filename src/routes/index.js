function registerRoutes(app)
{
    app.get('/', function (req, res) {
        res.render('index')
    })

}

export default registerRoutes