const apiRouter = require('express').Router()

const apiControllers = require('../controllers/apiControllers')

apiRouter.get('/users', apiControllers.usersController)

module.exports = apiRouter