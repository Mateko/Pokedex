import React from "react";
import { Redirect } from "react-router-dom";
import "./MainForm.css";

class MainForm extends React.Component {
  state = { pokemon: "", toPokeDetails: false, randomPokemons: false };

  handleInput(e) {
    e.preventDefault();
    this.setState({
      pokemon: e.target.value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.getPokemonDetails(this.state.pokemon);
    this.setState({
      toPokeDetails: true
    });
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.props.getRandomPokemons();
    this.setState({
      randomPokemons: true
    });
  }

  render() {
    const clearInput = this.state.pokemon.length === 0;
    const whiteSpaceInInput = this.state.pokemon.split(" ").length > 1;

    if (this.state.toPokeDetails === true) {
      return <Redirect to="/pokemon_details" />;
    }

    if (this.state.randomPokemons === true) {
      return <Redirect to="/random_pokemons" />;
    }

    return (
      <div className="column pokemon-column-container">
        <div className="ui image aligned center aligned grid">
          <img
            src="http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png"
            alt="Pokemon Logo PNG"
            className="pokemon-logo"
          />
        </div>
        <form className="ui large form">
          <h2>Catch by name</h2>
          <div className="field">
            <div className="ui input">
              <input
                className="pokemon-name-input"
                type="text"
                placeholder="Pokename!"
                onChange={this.handleInput.bind(this)}
                value={this.state.pokemon}
              />
            </div>
            <button
              className="ui fluid large submit pokemon-button-submit button"
              onClick={this.handleFormSubmit.bind(this)}
              disabled={clearInput | whiteSpaceInInput}
            >
              Search
            </button>

            {whiteSpaceInInput ? (
              <div className="ui red message">
                Pokemon name can't have white spaces!
              </div>
            ) : null}

            <button
              className="ui fluid large submit pokemon-button-random-picks button"
              onClick={this.handleButtonClick.bind(this)}
            >
              Discover random Pokemons!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default MainForm;
