import express from 'express';
import { get } from '../service/api_service.js';
import { mapPokemon } from '../mappers/pokemon.js';

const pokemonRouter = express.Router();

pokemonRouter.get('/:pokemonName', async (req, res) => {
  const data = await get('pokemon', req.params.pokemonName);
  res.send(mapPokemon(data));
});

export default pokemonRouter;