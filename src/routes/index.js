function registerRoutes(app)
{
    app.get('/', function (req, res) {
        res.send(process.env.MONGODB_URI)
    })

}

export default registerRoutes