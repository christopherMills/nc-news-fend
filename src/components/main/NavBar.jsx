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
      <p>View:</p>
      <Link to='/articles'>
        <button>[Articles]</button>
      </Link>
      <Link to='/topics'>
        <button>[Topics]</button>
      </Link>
      {displaySort && (
        <form onSubmit={handleSubmit}>
          <p>Sort by:</p>
          <div className='sortSelect'>
            <ul>
              <li>
                <input
                  type='radio'
                  value='created_at'
                  checked={sort_by === 'created_at'}
                  onChange={handleChange}
                />
                Date & time
              </li>
              <br />
              <li>
                <input
                  type='radio'
                  value='comment_count'
                  checked={sort_by === 'comment_count'}
                  onChange={handleChange}
                />
                Comment count
              </li>
              <br />
              <li>
                <input
                  type='radio'
                  value='votes'
                  checked={sort_by === 'votes'}
                  onChange={handleChange}
                />
                Vote count
              </li>
            </ul>
          </div>
        </form>
      )}
      <p>User:</p>
      <p>[select user]</p>
    </nav>
  );
}
