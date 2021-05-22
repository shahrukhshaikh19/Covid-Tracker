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
    <NavLink className="nav__link "  to="/home">Home</NavLink>&nbsp;
    </li>
    <li>
    <NavLink className="nav__link "  to="/StateWise">StateWise Data</NavLink>
    </li>
    <li>
    <NavLink className="nav__link "  to="/About">About</NavLink>
    </li>
    </ul>
  </nav>
  </div>
  </div>

  );
};

export default Navbar;