import React from "react";
import PickingPokemon from "./PickingPokemon";
import PokemonDetails from "./PokemonDetails";
import { BrowserRouter, Route } from "react-router-dom";
import { createCipher } from "crypto";
const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

class App extends React.Component {
  state = { selectedPokemon: null, fetchingError: false };

  onGettingPokemonName = async selectedPokemon => {
    const loweredSelectedPokemon = selectedPokemon.toLowerCase();
    try {
      const pokemon = await P.getPokemonByName(loweredSelectedPokemon);
      this.setState({
        selectedPokemon: pokemon
      });
    } catch (error) {
      this.setState({
        fetchingError: true
      });
    }
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="ui middle aligned center aligned grid">
            <Route
              path="/"
              exact
              component={() => (
                <PickingPokemon
                  onGettingPokemonName={this.onGettingPokemonName}
                />
              )}
            />
            <Route
              path="/pokemon_details"
              exact
              component={() => (
                <PokemonDetails
                  selectedPokemon={this.state.selectedPokemon}
                  fetchingError={this.state.fetchingError}
                />
              )}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
