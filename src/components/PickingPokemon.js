import React from "react";
import { Redirect } from "react-router-dom";

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
      <div className="column" style={{ maxWidth: "50vh", marginTop: "20vh" }}>
        <div className="ui image aligned center aligned grid">
          <img
            src="http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png"
            alt="Pokemon Logo PNG"
            className="pokemon-logo"
            style={{ marginLeft: "10px" }}
          />
        </div>
        <form className="ui large form">
          <h2>Catch by name</h2>
          <div className="field pokemon-name-input">
            <input
              type="text"
              name="text"
              placeholder="Pokename!"
              style={{
                borderColor: "#2A75BB",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#2A75BB",
                marginTop: "10px",
                borderWidth: "3px",
                textAlign: "center"
              }}
              onChange={this.onInputChange.bind(this)}
              value={this.state.pokemon}
            />
            <button
              className="ui fluid large submit button blue pokemon-button-submit"
              style={{
                backgroundColor: "#FFCB05",
                marginTop: "5px",
                color: "#2A75BB",
                fontSize: "20px"
              }}
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
