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
// MAIN
class App extends React.Component {
  state = {
    order: undefined,
    sort_by: undefined,
    displaySort: true,
  };

  setSortParams = (sort_by, order) => {
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

  // MIGHT NEED COMPONENT_DID_UPDATE HERE!!!

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
          <ArticleIndiv path='/articles/:article_id' />
          <TopicList
            order={this.state.order}
            sort_by={this.state.sort_by}
            displaySort={this.state.displaySort}
            path='/topics'
          />
        </Router>
      </div>
    );
  }
}

//EXPORTS
export default App;
