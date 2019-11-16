import React from "react";
const PokemonSkills = ({ stats }) => {
  return stats.map(stat => {
    return (
      <div
        className="eight wide column pokemon-skills-container"
        key={stat.stat.url}
      >
        <h4 className="pokemon-skills-header">
          {stat.stat.name.toUpperCase()}
        </h4>
        <strong>Base stat:</strong>
        <p>{stat.base_stat}</p>
        <strong>Effort:</strong>
        <p>{stat.effort}</p>
      </div>
    );
  });
};

export default PokemonSkills;
