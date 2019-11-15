import React from "react";

const PokemonSkills = ({ abilities }) => {
  return abilities.map(({ ability }) => {
    return (
      <div className="four wide column">
        <h4>{ability.name}</h4>
      </div>
    );
  });
};

export default PokemonSkills;
