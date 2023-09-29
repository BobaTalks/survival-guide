import React from 'react';
import PropTypes from 'prop-types';

export const MainBox = ({ children }) => {
  return (
    <div className="recipe recipe_scroll">
<<<<<<< HEAD
      <div>{children}</div>
=======
      <div className="secondaryContainer">{children}</div>
>>>>>>> 50cbf0e963cefbbf266482399fe7ec44ef2a5092
    </div>
  );
};

MainBox.propTypes = {
  children: PropTypes.node.isRequired,
};
