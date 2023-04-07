import React from 'react';
import './styles/navBarStyles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title"><a href="/">MO Bookstore</a></div>
      <ul className="navbar-links">
        <li><a href="/">Books</a></li>
        <li><a href="categories">Categories</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
