import { Link } from "react-router-dom";
import React from "react";

const LinkToMainPage = ({ message }) => {
  return (
    <Link
      className="ui fluid large submit link-to-main-page button"
      role="button"
      to="/"
    >
      {message}
    </Link>
  );
};

export default LinkToMainPage;
