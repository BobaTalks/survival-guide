import React from "react";
import PropTypes from "prop-types";

export const MainBox = ({ children }) => {
  return (
    <div className="recipe recipe_scroll">
      <div>{children}</div>
    </div>
  );
};

MainBox.propTypes = {
  children: PropTypes.node.isRequired,
};
