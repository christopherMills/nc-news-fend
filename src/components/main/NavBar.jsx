import React from 'react';
import { Link } from '@reach/router';

export default function NavBar(props) {
  const { displaySort, sort_by /*, order*/ } = props;

  const handleChange = (event) => {
    props.setSortParams(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <nav className='navBar'>
      <Link to='/articles'>
        <button>Articles</button>
      </Link>
      <Link to='/topics'>
        <button>Topics</button>
      </Link>
      {/* <Link to='authors'>
        <button>Authors</button>
      </Link> */}
      {displaySort && (
        <form onSubmit={handleSubmit}>
          <select value={sort_by} onChange={handleChange}>
            <option value='created_at'>Date and time</option>
            <option value='comment_count'>Comments</option>
            <option value='votes'>Vote count</option>
          </select>
        </form>
      )}
    </nav>
  );
}
