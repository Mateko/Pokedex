import React from "react";
import PokemonSkills from "../PokemonSkills";
import Loader from "../Loader";
import PokemonAbilities from "../PokemonAbilities";
import LinkToMainPage from "../LinkToMainPage";
import pokemonTypeColors from "../../helpers/pokemonTypeColor";
import pokemonType from "../../helpers/pokemonType";
import "./PokemonDetails.css";

const PokemonDetails = ({ selectedPokemon, fetchingError }) => {
  if (selectedPokemon !== null) {
    const stats = selectedPokemon.stats;
    const abilities = selectedPokemon.abilities;

    const colorOfPokemonName = `${
      pokemonTypeColors[selectedPokemon.types[0].type.name]
    }`;

    return (
      <div className="ui grid aligned center pokemon-details-grid-div">
        <div className="seven wide column">
          <img
            src={selectedPokemon.sprites.front_default}
            alt="Pokemon"
            className="pokemon-image"
          />
        </div>
        <div className="nine wide column">
          <h1
            style={{
              color: colorOfPokemonName
            }}
            className="pokemon-name"
          >
            {selectedPokemon.name}
          </h1>
          <h4 className="pokemon-type-header">Type:</h4>
          {pokemonType(selectedPokemon)}
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
        <div className="sixteen wide column">
          <LinkToMainPage message={"Back to main page"} />
        </div>
      </div>
    );
  } else if (fetchingError) {
    return (
      <div className="fetching-error">
        <div className="ui error-message message">Something went wrong :(</div>
        <LinkToMainPage message={"Go back to searching"} />
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default PokemonDetails;
