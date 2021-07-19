import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Acceuil
      </NavLink>
      <NavLink exact to="About" activeClassName="nav-active">
        About
      </NavLink>
      <NavLink exact to="Contact" activeClassName="nav-active">
        Contact
      </NavLink>
    </div>
  );
};

export default Navigation;
