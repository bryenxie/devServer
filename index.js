var express = require('express')
var app = express()
var base64Img = require('base64-img');

app.get('/', function (req, res) {
  let uri = req.body  
  base64Img.img(uri,'', '1',function(err, filepath) 
  
  {console.log('success')})
  res.send('Hello World')
})

app.listen(3001)
