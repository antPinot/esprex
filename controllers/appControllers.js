const {resolve} = require('path')
const static = require('express').static

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

const contactSubmitController = (req,res) => {
    console.log(req.url)
    res.end()
  }



module.exports = {indexController, contactController, serviceController, contactSubmitController}