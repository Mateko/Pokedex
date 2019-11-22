import pokemonTypeColors from "./pokemonTypeColor";
import React from "react";

export default function pokemonType(selectedPokemon) {
  return selectedPokemon.types.map(({ type }) => {
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
