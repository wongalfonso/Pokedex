const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const https = require('https'); 
const rp = require('request-promise');
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.static('dist'));
const options = {
  uri: 'https://pokeapi.bastionbot.org/v1/types',
  headers: {
    "User-Agent" : "BastionDiscordBot (https://bastionbot.org, 6.3.0)"
  }  
}
app.get('/pokemon', (req, res) => {
  console.log('yes');
  axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {        
    // console.log(response.data);
    res.send(response.data);
  })
  // .catch((err) => {
  //   console.log(err);
  //   res.send(err);
  // })
});

module.exports = app;