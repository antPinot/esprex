const esprex = require('./core/esprex');
const app = esprex();
const fs = require('fs')

const index = fs.readFileSync('./index.html')

app.get('/', (req, res) => {
  res.end('Home Page');
});

app.get('/contact', (req, res) => {
  res.end('Contact Page');
});

app.get('/index.html', (req, res) => {
  res.end(index);
});

app.post('/contact', (req,res) => {
  res.end('Votre formulaire a été soumis')
})

module.exports = app;