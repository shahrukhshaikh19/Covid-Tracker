import React from "react";
import "./Navbar.css";
import {NavLink,Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header__nav">
    <div className="nav__content">
 
  <nav >
    <ul className="nav__list ">
      <li>
      <NavLink className="nav__link "  to="/Covid-Tracker">Home</NavLink>&nbsp;
    </li>
    <li>
    <NavLink className="nav__link "  to="/Covid-Tracker/StateWise">StateWise Data</NavLink>
    </li>
    <li>
    <NavLink className="nav__link "  to="/Covid-Tracker/About">About</NavLink>
    </li>
    </ul>
  </nav>
  </div>
  </div>

  );
};

export default Navbar;