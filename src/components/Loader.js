import React from "react";

const Loader = () => {
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
};

export default Loader;
