const axios = require('axios');

const get = (req, res) => {
  axios.get(`http://localhost:3003/properties/${req.params.id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      throw err;
    })
};

const post = (req, res) => {
  axios.post(`http://localhost:3003/properties/`, req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      throw err;
    })
};

const updateHouse = (req, res) => {
  axios.put(`http://localhost:3003/properties/${req.params.id}`, req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      throw err;
    })
};

const updatePrices = (req, res) => {
  axios.put(`http://localhost:3003/prices/${req.params.id}`, req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      throw err;
    })
};

const remove = (req, res) => {
  axios.delete(`http://localhost:3003/properties/${req.params.id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      throw err;
    })
};

module.exports = {
  get,
  post,
  updateHouse,
  updatePrices,
  remove,
};