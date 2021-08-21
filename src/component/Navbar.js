import React from "react";
import { NavLink } from "react-router-dom";

// css
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/" className="logo">
        Landkit.
      </NavLink>
      <ul className="navlist">
        <li className="navitem">
          <NavLink
            className="navlink"
            activeClassName="active__navlink"
            exact
            to="/"
          >
            Landing
          </NavLink>
        </li>
        <li className="navitem">
          <NavLink
            className="navlink"
            activeClassName="active__navlink"
            exact
            to="/pages"
          >
            Pages
          </NavLink>
        </li>
        <li className="navitem">
          <NavLink
            className="navlink"
            activeClassName="active__navlink"
            exact
            to="/account"
          >
            Account
          </NavLink>
        </li>
        <li className="navitem">
          <NavLink
            className="navlink"
            activeClassName="active__navlink"
            exact
            to="/documentation"
          >
            Documentation
          </NavLink>
        </li>
      </ul>
      <button className="buy__button">Buy now</button>
    </div>
  );
};

export default Navbar;
