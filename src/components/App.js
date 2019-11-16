import React from "react";
import PickingPokemon from "./PickingPokemon";
import PokemonDetails from "./PokemonDetails";
import { BrowserRouter, Route } from "react-router-dom";
import RandomPokemons from "./RandomPokemons";
const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

class App extends React.Component {
  state = { selectedPokemon: null, fetchingError: false, pokemonsArray: null };

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

  onRandomPokemons = () => {
    const initialUrlArray = new Array(20).fill("/api/v2/pokemon/");
    const randomPokemonsArray = initialUrlArray.map(
      url => url + (Math.floor(Math.random() * 807) + 1)
    );

    P.resource(randomPokemonsArray).then(response => {
      this.setState({
        pokemonsArray: response
      });
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
                  onRandomPokemons={this.onRandomPokemons}
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
            <Route
              path="/random_pokemons"
              exact
              component={() => (
                <RandomPokemons pokemonsArray={this.state.pokemonsArray} />
              )}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
