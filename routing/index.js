const router = require('express').Router()

const appRoutes = require('./app-routes')
const apiRoutes = require('./api-users.routes')

router.use(appRoutes)
router.use(apiRoutes)

module.exports = router