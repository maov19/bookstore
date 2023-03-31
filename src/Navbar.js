import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title"><a href="/">MO Bookstore</a></div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="categories">Categories</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
