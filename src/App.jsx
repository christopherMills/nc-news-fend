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
    order: null,
    sort_by: null,
  };
  render() {
    return (
      <div className='App'>
        {/* PUT SITE BACKGROUND IN HOMEPAGE, 
          RENDER SIDEBAR FROM HOMEPAGE */}
        <Header className='header' />
        <NavBar
          order={this.state.order}
          sort_by={this.state.sort_by}
          className='navBar'
        />
        <Router className='rooter'>
          <ArticlesList
            order={this.state.order}
            sort_by={this.state.sort_by}
            path='/'
          />
          <ArticlesList
            order={this.state.order}
            sort_by={this.state.sort_by}
            path='/articles'
          />
          <ArticleIndiv path='/articles/:article_id' />
          <TopicList path='/topics' />
        </Router>
      </div>
    );
  }
}

//EXPORTS
export default App;
