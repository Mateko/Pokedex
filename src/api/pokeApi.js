import generateRandomUrls from "../helpers/randomUrlGenerator";

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

const fetchPokemonByName = selectedPokemon => {
  const loweredSelectedPokemon = selectedPokemon.toLowerCase();
  const pokemon = P.getPokemonByName(loweredSelectedPokemon);
  return pokemon;
};

const fetchRandomPokemons = () => {
  const randomPokemonsArray = generateRandomUrls();
  const response = P.resource(randomPokemonsArray).then(response => response);
  return response;
};

export { fetchPokemonByName, fetchRandomPokemons };
