// MODULES
import React from 'react';
import { Router } from '@reach/router';
// STYLES
import './App.css';
// COMPONENTS
import Header from './components/Header';
import HomePage from './components/HomePage';
// MAIN
class App extends React.Component {
  state = {};
  render() {
    return (
      <div className='App'>
        <Header />
        <Router>
          <HomePage path='/' />
        </Router>
      </div>
    );
  }
}

//EXPORTS
export default App;
