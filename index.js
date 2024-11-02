// PokeAPI
// Investigate API documentation standard/UI solution
// GET /type endpoint

const express = require('express');
const app = express()
const port = 3000

const pokemonRouter = require('./pokemon_router');

app.use('/pokemon', pokemonRouter);

app.listen(port, () => {
  console.log(`PokeProxy listening on port ${port}`);
});