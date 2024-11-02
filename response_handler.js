const Resource = {
  POKEMON: '/pokemon'
}

function getStat(stats, statToRetrieve) {
  const statObject = stats.find((stat) => stat.stat.name === statToRetrieve);
  if (statObject) {
    return statObject.base_stat
  }
  return 0;
}

function mapPokemon(pokemon) {
  return {
    id: pokemon.id,
    name: pokemon.name,
    weight: pokemon.weight,
    height: pokemon.height,
    base_experience: pokemon.base_experience,
    stats: {
      hp: getStat(pokemon.stats, 'hp'),
      attack: getStat(pokemon.stats, 'attack'),
      defense: getStat(pokemon.stats, 'defense'),
      special_attack: getStat(pokemon.stats, 'special-attack'),
      special_defense: getStat(pokemon.stats, 'special-defense'),
      speed: getStat(pokemon.stats, 'speed'),
    },
    sprites: {
      front: pokemon.sprites.front_default,
      back: pokemon.sprites.back_default
    },
  }
}

function responseHandler(data, req) {
  switch (req.baseUrl) {
    case Resource.POKEMON:
      return mapPokemon(data);
    default:
      return data;
  }
}

module.exports = responseHandler;