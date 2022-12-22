const router = require('express').Router()

const {indexController, contactController, serviceController, contactSubmitController} = require('../controllers/appControllers.js')

router.get('/index', indexController);
  
  /*router.get('/static/style.css', (req, res) => {
    console.log(req.url)
    res.sendFile(resolve('static' , 'style.css'))
  });
  
  router.get('/static/index.js', (req, res) => {
    console.log(req.url)
    res.sendFile(resolve('static' , 'index.js'))
  });*/
  
  router.get('/contact', contactController);
  
  router.get('/services',serviceController);
  
  router.post('/contact', contactSubmitController)

module.exports = router