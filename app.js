const express = require ('express')
const app = express()
const {resolve} = require ('path')

//const index = fs.readFileSync('./index.html')

app.get('/index', (req, res) => {
  console.log(req.url)
  res.sendFile(resolve('public' , 'index.html'))
});

app.get('/static/style.css', (req, res) => {
  console.log(req.url)
  res.sendFile(resolve('static' , 'style.css'))
});

app.get('/static/index.js', (req, res) => {
  console.log(req.url)
  res.sendFile(resolve('static' , 'index.js'))
});

app.get('/contact', (req, res) => {
  console.log(req.url)
  res.sendFile(resolve('public', 'contact.html'))
});

app.get('/services', (req, res) => {
  console.log(req.url)
  res.sendFile(resolve('public', 'services.html'))
});

app.post('/contact', (req,res) => {
  console.log(req.url)
  res.end()
})

module.exports = app;