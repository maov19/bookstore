import React from 'react';
import './styles/navBarStyles.css';
import person from './images/person-logo.PNG';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title"><a href="/">Bookstore MO</a></div>
      <ul className="navbar-links">
        <li><a href="/">BOOKS</a></li>
        <li><a href="categories">CATEGORIES</a></li>
      </ul>
      <img src={person} alt="logo" />
    </nav>
  );
}

export default Navbar;
