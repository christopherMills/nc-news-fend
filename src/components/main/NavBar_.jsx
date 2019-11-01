import React, { Component } from 'react';
import { Link } from '@reach/router';
import './NavBar.css';

export default class NavBar extends Component {
  handleChange = (event) => {
    this.props.setSortParams(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { displaySort, sort_by, order } = this.props;
    return (
      <nav className='navBar'>
        <Link to='/articles'>
          <button>Articles</button>
        </Link>
        <Link to='/topics'>
          <button>Topics</button>
        </Link>
        <Link to='authors'>
          <button>Authors</button>
        </Link>
        {displaySort && (
          <form onSubmit={this.handleSubmit}>
            <select value={sort_by} onChange={this.handleChange}>
              <option value='created_at'>Date and time</option>
              <option value='comment_count'>Comments</option>
              <option value='votes'>Vote count</option>
            </select>
          </form>
        )}
      </nav>
    );
  }
}
