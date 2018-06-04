import React from 'react';
import { Link } from 'react-router-dom';

import UserImage from '../UserImage/UserImage';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <UserImage />
        </li>
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
