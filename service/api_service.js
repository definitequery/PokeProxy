import 'dotenv/config'

export async function get(resource, param) {
  const response = await fetch(`${process.env.POKEMON_API_URL}/${resource}/${param}`);
  const json = await response.json();
  return json;
}