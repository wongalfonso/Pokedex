const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const mcache = require('memory-cache');
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.static('dist'));

app.get('/pokemon', (req, res) => {  
  axios.get('https://pokeapi.co/api/v2/pokemon/?limit=964').then((response) => { 
    res.send(response.data);
  })
});

app.get('/pokemon/:name', (req, res) => {  
  const name = req.params.name;  
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {    
    res.send(response.data);
  })
})

app.get('/pokemon/:num', (req, res) => {
  const num = req.params.num;
  axios.get(`https://pokeapi.co/api/v2/ability/${num}`).then((response) => {
    res.send(response.data);
  })
})

module.exports = app;