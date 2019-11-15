import React from "react";
import PokemonSkills from "./PokemonSkills";
import PokemonAbilities from "./PokemonAbilities";
import "./PokemonDetails.css";

const PokemonDetails = ({ selectedPokemon }) => {
  if (selectedPokemon !== null) {
    const stats = selectedPokemon.stats;
    const abilities = selectedPokemon.abilities;

    const pokemonTypeColors = {
      grass: "#78C850",
      fire: "#F08030",
      water: "#6890F0",
      bug: "#A8B820",
      normal: "#A8A878",
      poison: " #47D147",
      electric: "#FFFF66",
      ground: " #CCCCB3",
      fairy: "#EE99AC",
      fighting: "#C03028",
      psychic: "#F85888",
      rock: "#B8A038",
      ghost: "#705898",
      ice: "#4D79FF",
      dragon: "#7038F8"
    };

    function pokemonType() {
      return selectedPokemon.types.map(({ type }) => {
        return (
          <p
            className="pokemon-type"
            style={{ color: `${pokemonTypeColors[type.name]}` }}
          >
            {type.name}
          </p>
        );
      });
    }

    return (
      <div className="ui grid aligned center pokemon-details-grid-div">
        <div className="seven wide column">
          <img
            src={selectedPokemon.sprites.front_default}
            alt="pokemon image"
            className="pokemon-image "
          />
        </div>
        <div className="nine wide column">
          <h1
            style={{
              color: `${pokemonTypeColors[selectedPokemon.types[0].type.name]}`
            }}
            className="pokemon-name"
          >
            {selectedPokemon.name}
          </h1>
          <h4 className="pokemon-type-header">Type:</h4>
          {pokemonType()}
        </div>
        <h4 className="ui horizontal divider header">
          <i className="bolt icon"></i>
          Abilities
        </h4>
        <PokemonAbilities abilities={abilities} />
        <h4 className="ui horizontal divider header">
          <i className="bar chart icon"></i>
          Stats
        </h4>
        <PokemonSkills stats={stats} />
      </div>
    );
  } else {
    return (
      <div className="ui grid aligned center" className="pokemon-detail-loader">
        <div class="ui active inverted dimmer">
          <div class="ui large text loader">Loading</div>
        </div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    );
  }
};

export default PokemonDetails;
