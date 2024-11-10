export async function get(resource, param) {
  const response = await fetch(`https://pokeapi.co/api/v2/${resource}/${param}`);
  const json = await response.json();
  return json;
}