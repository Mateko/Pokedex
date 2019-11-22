import React from "react";
import MainForm from "./MainForm/MainForm";
import PokemonDetails from "./PokemonDetails/PokemonDetails";
import { BrowserRouter, Route } from "react-router-dom";
import RandomPokemons from "./RandomPokemons/RandomPokemons";
import { fetchPokemonByName, fetchRandomPokemons } from "../api/pokeApi";

class App extends React.Component {
  state = { selectedPokemon: null, fetchingError: false, pokemonsArray: null };

  getPokemonDetails = async selectedPokemon => {
    try {
      const pokemon = await fetchPokemonByName(selectedPokemon);
      this.setState({
        selectedPokemon: pokemon
      });
    } catch (error) {
      this.setState({
        fetchingError: true
      });
    }
  };

  getRandomPokemons = async () => {
    const pokemonsArray = await fetchRandomPokemons();
    this.setState({
      pokemonsArray
    });
  };

  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="ui middle aligned center aligned grid">
            <Route
              path="/"
              exact
              component={() => (
                <MainForm
                  getPokemonDetails={this.getPokemonDetails}
                  getRandomPokemons={this.getRandomPokemons}
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
                <RandomPokemons
                  pokemonsArray={this.state.pokemonsArray}
                  getPokemonDetails={this.getPokemonDetails}
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
