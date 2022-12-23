// Contrôleurs de l'application

const indexController = (req, res) => {
    console.log(req.url)
    res.render('pages/home.pug')
  }

const contactController =  (req, res) => {
    console.log(req.url)
    res.render('pages/contact.pug')
  }

const serviceController = (req, res) => {
    console.log(req.url)
    res.render('pages/services.pug')
  }

const utilisateurController = (req,res) => {
  console.log(req.url)
  const {users} = require('../database/data.json')
  res.render('pages/users.pug', {users})
}

const contactSubmitController = (req,res) => {
    console.log(req.url)
    res.end()
  }

module.exports = {indexController, contactController, serviceController, contactSubmitController, utilisateurController}