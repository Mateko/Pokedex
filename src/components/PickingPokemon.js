import React from "react";
import { Redirect } from "react-router-dom";
import "./PickingPokemon.css";
class PickingPokemon extends React.Component {
  state = { pokemon: "", toPokeDetails: false };

  onInputChange(e) {
    e.preventDefault();
    this.setState({
      pokemon: e.target.value
    });
  }

  onInputSubmit(e) {
    e.preventDefault();
    this.props.onGettingPokemonName(this.state.pokemon);
    this.setState({
      toPokeDetails: true
    });
  }

  render() {
    const disableButton = this.state.pokemon.length === 0;
    const whiteSpaces = this.state.pokemon.split(" ").length > 1;

    if (this.state.toPokeDetails === true) {
      return <Redirect to="/pokemon_details" />;
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
            <div class="ui input">
              <input
                className="pokemon-name-input"
                type="text"
                placeholder="Pokename!"
                onChange={this.onInputChange.bind(this)}
                value={this.state.pokemon}
              />
            </div>
            <button
              className="ui fluid large submit pokemon-button-submit button"
              onClick={this.onInputSubmit.bind(this)}
              disabled={disableButton | whiteSpaces}
            >
              Search
            </button>
            {whiteSpaces ? (
              <div className="ui red message">
                Pokemon name can't have white spaces!
              </div>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}

export default PickingPokemon;
