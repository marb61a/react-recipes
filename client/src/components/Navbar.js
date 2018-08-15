import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
  
  </nav>
);

const NavbarAuth = () => (
  <ul>
  
  </ul>
);

const NavbarUnAuth = () => (
  <ul>
    <li>
      <NavLink to="/" exact>Home</NavLink>
    </li>
  </ul>
);

export default Navbar;