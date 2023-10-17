import React from "react";
import { NavLink } from "react-router-dom";

import "./nav-item.css";

const NavItem = ({ name }, { key }) => {
  return (
    <li className="navigation-items" key={key}>
      <NavLink to={"/" + name}>{name}</NavLink>
    </li>
  );
};

export default NavItem;
