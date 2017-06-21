const express = require('express'),
      app = express()

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))
