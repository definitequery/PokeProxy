import { STAT_TYPES } from "../util/constants.js";

function getStat(stats, statToRetrieve) {
  const statObject = stats.find((stat) => stat.stat.name === statToRetrieve);
  if (statObject) {
    return statObject.base_stat
  }
  return 0;
}

export function mapPokemon(pokemon) {
  return {
    id: pokemon.id,
    name: pokemon.name,
    weight: pokemon.weight,
    height: pokemon.height,
    baseExperience: pokemon.base_experience,
    stats: {
      hp: getStat(pokemon.stats, STAT_TYPES.HP),
      attack: getStat(pokemon.stats, STAT_TYPES.ATTACK),
      defense: getStat(pokemon.stats, STAT_TYPES.DEFENSE),
      special_attack: getStat(pokemon.stats, STAT_TYPES.SPECIAL_ATTACK),
      special_defense: getStat(pokemon.stats, STAT_TYPES.SPECIAL_DEFENSE),
      speed: getStat(pokemon.stats, STAT_TYPES.SPEED),
    },
    sprites: {
      front: pokemon.sprites.front_default,
      back: pokemon.sprites.back_default
    },
  }
}
