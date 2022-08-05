//jshint esversion: 6
const express = require('express')
const bodyParser = require('body-parser')
const app =express()
const port =3000

// require handlebars in the project
const { engine } = require('express-handlebars');
app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.set("views", "./views");

const generatePassword = require('./generatePassword')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
    res.render('index')
  })
  

  app.post('/', (req, res) => {
    console.log('random password is: ', generatePassword(req.body))
    const option = req.body
    const password = generatePassword(option)
    res.render('index', { password: password ,option: option})
  })


  // starts the express server and listening for connections.
  app.listen(port, () => {
    console.log(`Express app listening on port ${port}.`)
  })