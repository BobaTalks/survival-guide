import logoImage from "./images/BT Logo.svg";
import React from "react";
export const Logo = () => {
  return (
    <div>
      <img className="logo" src={logoImage} alt="BobaTalks logo" />
    </div>
  );
};
