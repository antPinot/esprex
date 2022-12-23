const express = require ('express')
const app = express()
const {resolve} = require ('path')
const router = require('./routing/index')

app.use(express.static(resolve('static'), {index:false}))

//Routing
app.use(router)

module.exports = app;