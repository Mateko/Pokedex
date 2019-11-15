import React from "react";

const PokemonSkills = ({ stats }) => {
  return stats.map(stat => {
    return (
      <div
        className="eight wide column"
        style={{
          textAlign: "center"
        }}
      >
        <h4
          style={{
            borderBottom: "1px solid"
          }}
        >
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
