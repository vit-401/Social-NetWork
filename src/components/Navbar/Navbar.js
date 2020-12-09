import React from "react";
import NavbarCss from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
// import Massages from '../Massages'

const Navbar = () => {
  const { nav, active } = NavbarCss;
  return (
    <>
      <nav className={nav}>
        <ul>
          <li>
            <NavLink to="/profile" activeClassName={active}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dialog" activeClassName={active}>
              Massages
            </NavLink>
          </li>
          <li>
            <a href="#s">News</a>
          </li>
          <li>
            <a href="#s">Music</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
