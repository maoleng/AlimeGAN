import handlebars from 'express-handlebars'

function boosterHandlebars(app)
{
    app.use((req, res, next) => {
        const hbs = handlebars.create({
            helpers: {
                ifEmpty: variable => {
                    return variable === null || variable === undefined
                },
                isAlreadyLogin: () => {
                    const authed = req.session.authed

                    return authed !== null && authed !== undefined
                },
                authedName: () => {
                    return req.session.authed.name
                }
            }
        })

        app.engine('handlebars', hbs.engine)
        app.set('view engine', 'handlebars')
        app.set('views', './src/resources/views')

        next()
    })


}

export default boosterHandlebars