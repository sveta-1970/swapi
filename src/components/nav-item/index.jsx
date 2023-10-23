import React from "react";
import { NavLink } from "react-router-dom";

import "./nav-item.css";

const NavItem = ({ name }) => {
  return (
    <li className="navigation-items">
      <NavLink to={"/" + name}>{name}</NavLink>
    </li>
  );
};

export default NavItem;
