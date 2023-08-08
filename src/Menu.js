import React from "react";
import PropTypes from "prop-types";

export const Menu = () => {
  return (
    <div className="Menu">
      <p>Menu</p>

      <Divider />
      <Shelf>
        <div>College Credit Classes</div>
      </Shelf>
      <Shelf>
        <div>Post Secondary Education </div>
      </Shelf>
      <Shelf>
        <div>Internships</div>
      </Shelf>
      <Shelf>
        <div>Housing</div>
      </Shelf>
      <Shelf>
        <div>Tuition & Aid</div>
      </Shelf>

      <Divider />

      <Shelf>
        <div>Team</div>
      </Shelf>

      <Divider />

      <Shelf>
        <div>Help</div>
      </Shelf>
      <Divider />
    </div>
  );
};

const Shelf = ({ children }) => {
  return (
    <div className="shelf">
      <span className="shelf_text">{children}</span>
    </div>
  );
};

const Divider = () => {
  return (
    <svg
      className="line"
      width="174"
      height="6"
      viewBox="0 0 174 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Line 1"
        d="M3 3H171"
        stroke="black"
        strokeOpacity="0.5"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

Shelf.propTypes = {
  children: PropTypes.node.isRequired,
};
