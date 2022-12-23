const router = require('express').Router()

const { indexController, contactController, serviceController, contactSubmitController, utilisateurController } = require('../controllers/appControllers.js')

//Routes de l'application

router.get('/index', indexController);

router.get('/contact', contactController);

router.get('/services', serviceController);

router.get('/utilisateurs', utilisateurController)

router.post('/contact', contactSubmitController)

module.exports = router