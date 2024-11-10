import express from 'express';
import pokemonRouter from './routers/pokemon_router.js';
import typeRouter from './routers/type_router.js';

const app = express();
const port = 3000;

app.use('/pokemon', pokemonRouter);
app.use('/type', typeRouter)

app.listen(port, () => {
  console.log(`PokeProxy listening on port ${port}`);
});