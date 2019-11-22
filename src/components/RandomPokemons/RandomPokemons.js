import React from "react";
import LinkToMainPage from "../LinkToMainPage";
import Loader from "../Loader";
import "./RandomPokemons.css";
import pokemonTypeColors from "../../helpers/pokemonTypeColor";
import pokemonType from "../../helpers/pokemonType";
import { Redirect } from "react-router-dom";

class RandomPokemons extends React.Component {
  state = { toPokeDetails: false };

  onInputSubmit = e => {
    e.preventDefault();
    const pokemonName = e.target.getAttribute("name");
    this.props.getPokemonDetails(pokemonName);
    this.setState({
      toPokeDetails: true
    });
  };

  displayPokemons = () => {
    return this.props.pokemonsArray.map(pokemon => {
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
              <img src={pokemon.sprites.front_default} alt="Pokemon" />
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
              <button
                className="ui fluid large submit pokemon-button-submit button"
                onClick={this.onInputSubmit}
                name={pokemon.name}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    if (this.state.toPokeDetails === true) {
      return <Redirect to="/pokemon_details" />;
    }

    if (this.props.pokemonsArray !== null) {
      return (
        <div className="ui grid random-pokemons-grid-component">
          <h1 className="sixteen wide column random-pokemon-header">
            Catch them all!
          </h1>
          {this.displayPokemons()}
          <div className="sixteen wide column">
            <LinkToMainPage message={"Back to main page"} />
          </div>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

export default RandomPokemons;
