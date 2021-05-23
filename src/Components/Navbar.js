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
      <NavLink className="nav__link "  to="/Sharukh-sCoronaApp">Home</NavLink>&nbsp;
    </li>
    <li>
    <NavLink className="nav__link "  to="/Sharukh-sCoronaApp/StateWise">StateWise Data</NavLink>
    </li>
    <li>
    <NavLink className="nav__link "  to="/Sharukh-sCoronaApp/About">About</NavLink>
    </li>
    </ul>
  </nav>
  </div>
  </div>

  );
};

export default Navbar;