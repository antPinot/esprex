const express = require ('express')
const app = express()
const {resolve} = require ('path')
const appRoutes = require('./routing/app-routes')
const apiRoutes = require('./routing/api-users.routes')

app.use(express.static(resolve('static'), {index:false}))
app.use(appRoutes)
app.use(apiRoutes)

module.exports = app;