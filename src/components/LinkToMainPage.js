import { Link } from "react-router-dom";
import React from "react";

const LinkToMainPage = ({ message }) => {
  return (
    <Link
      className="ui fluid large submit fetching-error-button button"
      role="button"
      to="/"
    >
      {message}
    </Link>
  );
};

export default LinkToMainPage;
