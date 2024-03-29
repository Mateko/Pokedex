import React from "react";

const Loader = () => {
  return (
    <div className="ui grid aligned center pokemon-detail-loader">
      <div className="ui active inverted dimmer">
        <div className="ui large text loader">Loading</div>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};

export default Loader;
