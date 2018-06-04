import React from 'react';
import { Link } from 'react-router-dom';



const Nav = () => (
  <div className="navbar">
    <div>
      <ul id="navbarList">
        <li>
          <Link to="/user">
            Home
          </Link>
        </li>
        <li>
          <Link to="/info">
            Admin
          </Link>
        </li>
        <li>
          <Link to="/student">
            Student
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
