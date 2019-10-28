import React, { Component } from 'react';

const NavBar = (props) => {
  return (
    <nav>
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
