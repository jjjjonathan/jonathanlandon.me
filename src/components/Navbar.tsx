import { Link } from 'gatsby';
import React from 'react';

const Navbar = () => (
  <nav className="container-fluid">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
    <ul>
      <li>Gallery</li>
      <li>Video</li>
    </ul>
  </nav>
);

export default Navbar;
