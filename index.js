var express = require('express')
var app = express()
var base64Img = require('base64-img');
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '10mb'}));

app.post('/', function (req, res) {
  let uri = req.body.uri  
  base64Img.img(uri,'', '1', function(err, filepath) {
    console.log('success')
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const fileName = 'Local image file, e.g. /path/to/image.png';

    client
      .faceDetection(fileName)
      .then(results => {
        const faces = results[0].faceAnnotations;

        console.log('Faces:');
        faces.forEach((face, i) => {
          console.log(`  Face #${i + 1}:`);
          console.log(`    Joy: ${face.joyLikelihood}`);
          console.log(`    Anger: ${face.angerLikelihood}`);
          console.log(`    Sorrow: ${face.sorrowLikelihood}`);
          console.log(`    Surprise: ${face.surpriseLikelihood}`);
        });
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
  })
  res.send('Hello World')
})

app.listen(3001)
