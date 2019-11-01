// MODULES
import React from 'react';
import { Router } from '@reach/router';

// STYLES
import './App.css';

// COMPONENTS
import Header from './components/main/Header';
import NavBar from './components/main/NavBar_';
import ArticlesList from './components/main/ArticlesList';
import ArticleIndiv from './components/article/ArticleIndiv';
import TopicList from './components/topics/TopicList';
import ErrorHandler from './components/errors/errorHandler';

// MAIN
class App extends React.Component {
  state = {
    order: undefined,
    sort_by: undefined,
    displaySort: true,
    username: 'jessjelly',
  };

  setSortParams = (sort_by, order = undefined) => {
    this.setState({
      sort_by,
      order,
    });
  };

  toggleSort = (bool) => {
    this.setState({
      displaySort: bool,
    });
  };

  render() {
    return (
      <div className='App'>
        <Header className='header' />
        <NavBar
          order={this.state.order}
          sort_by={this.state.sort_by}
          displaySort={this.state.displaySort}
          setSortParams={this.setSortParams}
          className='navBar'
        />
        <Router className='rooter'>
          <ArticlesList
            order={this.state.order}
            sort_by={this.state.sort_by}
            displaySort={this.state.displaySort}
            toggleSort={this.toggleSort}
            path='/'
          />
          <ArticlesList
            order={this.state.order}
            sort_by={this.state.sort_by}
            displaySort={this.state.displaySort}
            path='/articles'
          />
          <ArticleIndiv
            path='/articles/:article_id'
            username={this.state.username}
          />
          <TopicList
            order={this.state.order}
            sort_by={this.state.sort_by}
            displaySort={this.state.displaySort}
            path='/topics'
          />
          <ErrorHandler
            default
            statusCode='400'
            errorMsg='Invalid path requested'
          />
        </Router>
      </div>
    );
  }
}

//EXPORTS
export default App;
