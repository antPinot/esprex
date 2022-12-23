const {resolve} = require('path')

// Contrôleurs de l'application

const indexController = (req, res) => {
    console.log(req.url)
    res.send(require('../views/pages/index'))
  }

const contactController =  (req, res) => {
    console.log(req.url)
    res.send(require('../views/pages/contact'))
  }

const serviceController = (req, res) => {
    console.log(req.url)
    res.send(require('../views/pages/services'))
  }

const utilisateurController = (req,res) => {
  console.log(req.url)
  res.send(require('../views/pages/users'))
}

const contactSubmitController = (req,res) => {
    console.log(req.url)
    res.end()
  }

module.exports = {indexController, contactController, serviceController, contactSubmitController, utilisateurController}