const {resolve} = require('path')

// Contrôleurs de l'application

const indexController = (req, res) => {
    console.log(req.url)
    res.sendFile(resolve('public' , 'index.html'))
  }

const contactController =  (req, res) => {
    console.log(req.url)
    res.sendFile(resolve('public', 'contact.html'))
  }

const serviceController = (req, res) => {
    console.log(req.url)
    res.sendFile(resolve('public', 'services.html'))
  }

const utilisateurController = (req,res) => {
  console.log(req.url)
  res.sendFile(resolve('public', 'utilisateurs.html'))
}

const contactSubmitController = (req,res) => {
    console.log(req.url)
    res.end()
  }

module.exports = {indexController, contactController, serviceController, contactSubmitController, utilisateurController}