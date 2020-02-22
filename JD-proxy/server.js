require('newrelic')
const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000
const controllers = require('./controllers.js');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Added endpoints

app.get('/properties/:id', controllers.get);

app.post('/properties', controllers.post);

app.put('/properties/:id', controllers.updateHouse);

app.put('/prices/:id', controllers.updatePrices);

app.delete('/properties/:id', controllers.remove);

//Original endpoints

app.get('/seed', (req, res) => {
  axios.get('http://18.223.108.8:3003/seed')
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log(err)
    })
});

app.get('/houses', (req, res) => {
  axios.get('http://18.144.88.205:3004/houses')
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log(err)
    })
});

app.get('/listings', (req, res) => {
  axios.get('http://52.53.150.79:3001/listings')
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log(err)
    })
});

app.get('/api/summary/data/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://3.17.76.247:3002/api/summary/data/${id}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))