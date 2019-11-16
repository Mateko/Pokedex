import pokemonTypeColors from "./PokemonTypeColors";
import React from "react";

export default function pokemonType(selectedPokemon) {
  return selectedPokemon.types.map(({ type }) => {
    console.log(type);
    return (
      <p
        key={type.url}
        className="pokemon-type"
        style={{ color: `${pokemonTypeColors[type.name]}` }}
      >
        {type.name}
      </p>
    );
  });
}
