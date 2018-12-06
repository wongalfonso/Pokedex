const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
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
  axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => { 
    res.send(response.data);
  })
});
app.get('/pokemon/:name', (req, res) => {  
  const name = req.params.name;  
  if (name)
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {    
    res.send(response.data);
  })
})
module.exports = app;