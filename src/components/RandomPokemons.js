import React from "react";
import LinkToMainPage from "./LinkToMainPage";
import Loader from "./Loader";
import "./RandomPokemons.css";
import pokemonTypeColors from "./helpers/PokemonTypeColors";
import pokemonType from "./helpers/PokemonType";

const RandomPokemons = ({ pokemonsArray }) => {
  const showingRandomPokemons = () => {
    return pokemonsArray.map(pokemon => {
      const colorOfPokemonName = `${
        pokemonTypeColors[pokemon.types[0].type.name]
      }`;

      return (
        <div
          className="eight wide column"
          key={pokemon.location_area_encounters}
        >
          <div className="ui card">
            <div className="image">
              <img src={pokemon.sprites.front_default} />
            </div>
            <div className="content">
              <p
                className="header random-pokemon-name"
                style={{ color: colorOfPokemonName }}
              >
                {pokemon.name}
              </p>
              <div className="description">{pokemonType(pokemon)}</div>
            </div>
            <div className="extra content">
              {/* put here button to go to pokemon details */}
            </div>
          </div>
        </div>
      );
    });
  };

  if (pokemonsArray !== null) {
    return (
      <div className="ui grid random-pokemons-grid-component">
        <h1 className="sixteen wide column random-pokemon-header">
          Catch them all!
        </h1>
        {showingRandomPokemons()}
        <div className="sixteen wide column">
          <LinkToMainPage message={"Back to main page"} />
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default RandomPokemons;
