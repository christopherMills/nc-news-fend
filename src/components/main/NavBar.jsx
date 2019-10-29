import React from 'react';
import { Link } from '@reach/router';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <nav className='navBar'>
      <Link to='/articles'>
        <button>Articles</button>
      </Link>
      <Link to='/topics'>
        <button>Topics</button>
      </Link>
      <Link to='/authors'>
        <button>Authors</button>
      </Link>
    </nav>
  );
};

export default NavBar;
