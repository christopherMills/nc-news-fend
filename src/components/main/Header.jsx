import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  const title = '<NorthCoders News/>';
  return (
    <Link className='mainHeader' to='/'>
      <h1>{title}</h1>
    </Link>
  );
};

export default Header;
