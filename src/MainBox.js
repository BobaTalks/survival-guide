// eslint-disable-next-line prettier/prettier
import React from "react";
import PropTypes from "prop-types";

export const MainBox = ({ children }) => {
  // eslint-disable-next-line prettier/prettier

  return (
    <div className="recipe recipe_scroll">
      <div>{children}</div>
    </div>
  );
};

MainBox.propTypes = {
  children: PropTypes.node.isRequired,
};
