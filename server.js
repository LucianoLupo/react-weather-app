const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const enforce = require('express-sslify');
const axios = require('axios');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

const apiKey = process.env.WEATHER_KEY ;

app.post('/passCoords', (req, res) => {
    
  console.log("--->",req.body)
        
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${req.body.coords.lat}&lon=${req.body.coords.lon}&appid=${apiKey}`)
      .then(resp => {
        res.status(200).send({ data: resp.data });
      })
      .catch(err => {
        res.status(500).send({ error:"error message" })
      })

});
  

