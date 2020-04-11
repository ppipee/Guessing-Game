'use strict'
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./router')
// Connection URL

// Constants
const PORT = 8080
const HOST = '127.0.0.1'

// App
const app = express()

// view engine set up
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/views/game'))
app.use(express.static(__dirname + '/views/score'))

app.use('/', router)



app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

