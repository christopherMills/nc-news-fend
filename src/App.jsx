// MODULES
import React from 'react';
import { Router } from '@reach/router';
// STYLES
import './App.css';
// COMPONENTS
import Header from './components/main/Header';
import NavBar from './components/main/NavBar';
import ArticlesList from './components/main/ArticlesList';

// MAIN
class App extends React.Component {
  state = {
    order: null,
    sortBy: null,
  };
  render() {
    return (
      <div className='App'>
        {/* PUT SITE BACKGROUND IN HOMEPAGE, 
          RENDER SIDEBAR FROM HOMEPAGE */}
        <Header className='header' />
        <NavBar
          order={this.state.order}
          sortBy={this.state.sortBy}
          className='navBar'
        />
        <Router>
          <ArticlesList
            order={this.state.order}
            sortBy={this.state.sortBy}
            path='/'
          />
          <ArticlesList
            order={this.state.order}
            sortBy={this.state.sortBy}
            path='/articles'
          />
        </Router>
      </div>
    );
  }
}

//EXPORTS
export default App;
