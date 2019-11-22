import React from "react";

const PokemonSkills = ({ abilities }) => {
  return abilities.map(({ ability }) => {
    return (
      <div
        className="sixteen wide column pokemon-abilities-div"
        key={ability.url}
      >
        <h4>{ability.name}</h4>
      </div>
    );
  });
};

export default PokemonSkills;
