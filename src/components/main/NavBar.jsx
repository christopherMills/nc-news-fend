// DELETE

import React, { Component } from 'react';
import { Link } from '@reach/router';
import './NavBar.css';

export default class NavBar extends Component {
  state = {
    sort_by: undefined,
    order: undefined,
  };

  // HELPER FNS

  // tells App.jsx to update its state for the
  // SQL query parameters in ArticlesList etc
  updateSortParams(sort_by, order) {
    this.props.setSortParams(sort_by, order);
  }

  // handle user clicking new sort-by option
  handleChange = (event) => {
    this.setState({
      sort_by: event.target.value,
    });
  };

  // handle the form being submitted
  handleSubmit(event) {
    event.preventDefault();
  }

  // LIFECYCLE

  componentDidMount() {
    this.setState({
      sort_by: this.props.sort_by,
      order: this.props.order,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order } = this.state;
    if (prevProps !== this.props) {
      this.render();
    }
    if (prevState.sort_by !== sort_by) {
      this.props.setSortParams(sort_by, order);
    }
  }

  // RENDER

  render() {
    const { displaySort } = this.props;
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
        {displaySort && (
          <form onSubmit={this.handleSubmit}>
            <select value={this.state.sort_by} onChange={this.handleChange}>
              <option value='created_at'>Date / time</option>
              <option value='comment_count'>Comments</option>
              <option value='votes'>Vote count</option>
            </select>
          </form>
        )}
      </nav>
    );
  }
}
