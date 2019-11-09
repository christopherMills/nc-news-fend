// MODULES
import React from 'react';
import { Router } from '@reach/router';

// STYLES
import './App.css';

// COMPONENTS
import Header from './components/main/Header';
import NavBar from './components/main/NavBar';
import ArticlesList from './components/main/ArticlesList';
import ArticleIndiv from './components/article/ArticleIndiv';
import TopicList from './components/topics/TopicList';
import ErrorHandler from './components/errors/errorHandler';

// MAIN
class App extends React.Component {
  state = {
    order: undefined,
    sort_by: 'created_at',
    displaySort: true,
    username: '',
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

  changeUser = (string, shouldLogOut) => {
    this.setState({
      username: shouldLogOut ? undefined : string,
    });
  };

  render() {
    return (
      <div className='appMain'>
        <Header
          className='header'
          username={this.state.username}
          changeUser={this.changeUser}
        />
        <div className='mainFlex'>
          <NavBar
            className='navBar'
            order={this.state.order}
            sort_by={this.state.sort_by}
            displaySort={this.state.displaySort}
            setSortParams={this.setSortParams}
            changeUser={this.changeUser}
            username={this.state.username}
          />
          <Router className='router'>
            <ArticlesList
              order={this.state.order}
              sort_by={this.state.sort_by}
              displaySort={this.state.displaySort}
              toggleSort={this.toggleSort}
              path='/'
              username={this.state.username}
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
              displaySort={this.state.displaySort}
            />
            <TopicList
              order={this.state.order}
              sort_by={this.state.sort_by}
              displaySort={this.state.displaySort}
              path='/topics'
              username={this.state.username}
            />
            <ErrorHandler
              default
              statusCode='404'
              errorMsg='Invalid path requested'
            />
          </Router>
        </div>
      </div>
    );
  }
}

//EXPORTS
export default App;
