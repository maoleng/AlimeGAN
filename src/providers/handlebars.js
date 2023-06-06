import handlebars from 'express-handlebars'
import path from 'path'

function boosterHandlebars(app)
{
    app.use((req, res, next) => {
        const hbs = handlebars.create({
            helpers: {
                ifEmpty: variable => variable === null || variable === undefined,
                asset: filePath => process.env.APP_URL + '/' + filePath,
                authedName: () => req.session.authed.name,
                isAlreadyLogin: () => {
                    const authed = req.session.authed

                    return authed !== null && authed !== undefined
                },
                section: function (name, options) {
                    if (!this._sections) {
                        this._sections = {}
                    }
                    this._sections[name] = options.fn(this)
                    return null
                },
            }
        })

        app.engine('handlebars', hbs.engine)
        app.set('view engine', 'handlebars')
        app.set('views', './src/resources/views')

        next()
    })


}

export default boosterHandlebars