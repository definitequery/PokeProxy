const express = require('express');
const pokemonRouter = express.Router();

const responseHandler = require('./response_handler');

pokemonRouter.get('/:pokemonName', async (req, res) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.pokemonName}`)
  const json = await response.json();
  res.send(responseHandler(json, req));
});

module.exports = pokemonRouter;