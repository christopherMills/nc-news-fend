import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <Link className='mainHeader' to='/'>
      <h1>NCNews</h1>
    </Link>
  );
};

export default Header;
