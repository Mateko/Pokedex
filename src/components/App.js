import React from "react";
import PickingPokemon from "./PickingPokemon";
import PokemonDetails from "./PokemonDetails";
import { BrowserRouter, Route } from "react-router-dom";
const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

class App extends React.Component {
  state = { selectedPokemon: null };

  onGettingPokemonName = async selectedPokemon => {
    const loweredSelectedPokemon = selectedPokemon.toLowerCase();
    const pokemon = await P.getPokemonByName(loweredSelectedPokemon);
    this.setState({
      selectedPokemon: pokemon
    });
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
                <PokemonDetails selectedPokemon={this.state.selectedPokemon} />
              )}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
