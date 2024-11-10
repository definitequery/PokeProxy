import { DAMAGE_RELATION_TYPE } from "../util/constants.js"

function getSprites(sprites) {
  const icons = [];

  for (const key in sprites) {
    if (typeof sprites[key] === 'object') {
      icons.push(...getSprites(sprites[key]));
    } else if (key === 'name_icon') {
      icons.push(sprites[key]);
    }
  }

  return icons;
}

function getDamageRelation(damageRelations, relationType) {
  if (damageRelations[relationType]) {
    return damageRelations[relationType].map(relation => relation.name);
  }
  return [];
}

function mapDamageRelations(damageRelations) {
  return {
    doubleDamageTo: getDamageRelation(
      damageRelations, DAMAGE_RELATION_TYPE.DOUBLE_DAMAGE.TO
    ),
    doubleDamageFrom: getDamageRelation(
      damageRelations, DAMAGE_RELATION_TYPE.DOUBLE_DAMAGE.FROM
    ),
    halfDamageTo: getDamageRelation(
      damageRelations, DAMAGE_RELATION_TYPE.HALF_DAMAGE.TO
    ),
    halfDamageFrom: getDamageRelation(
      damageRelations, DAMAGE_RELATION_TYPE.HALF_DAMAGE.FROM
    ),
    noDamageTo: getDamageRelation(
      damageRelations, DAMAGE_RELATION_TYPE.NO_DAMAGE.TO
    ),
    noDamageFrom: getDamageRelation(
      damageRelations, DAMAGE_RELATION_TYPE.NO_DAMAGE.FROM
    ),
  }
}

export function mapType(type) {
  return {
    id: type.id,
    name: type.name,
    moveDamageClass: type.move_damage_class.name,
    generation: type.generation.name,
    sprites: getSprites(type.sprites),
    damageRelations: mapDamageRelations(type.damage_relations),
  }
}