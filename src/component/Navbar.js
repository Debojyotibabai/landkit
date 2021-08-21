import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// css
import "../css/Navbar.css";

// material icon
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <NavLink exact to="/" className="logo">
        Landkit.
      </NavLink>
      <ul className={isOpen ? "navlist active__navlist" : "navlist"}>
        <li className="navitem">
          <NavLink
            className="navlink"
            activeClassName="active__navlink"
            exact
            to="/"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
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
            onClick={() => {
              setIsOpen(!isOpen);
            }}
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
            onClick={() => {
              setIsOpen(!isOpen);
            }}
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
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Documentation
          </NavLink>
        </li>
      </ul>
      <div className="menu__buy">
        <button className="buy__button">Buy now</button>
        <button
          className="menu"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
