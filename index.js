var express = require('express')
var app = express()
var base64Img = require('base64-img');
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '10mb'}));

app.post('/', function (req, res) {
  let uri = req.body.uri  
  base64Img.img(uri,'', '1',function(err, filepath) 
  {console.log('success')})
  res.send('Hello World')
})

app.listen(3001)
