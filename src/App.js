import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxBasics from './ReduxBasics';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Understanding Redux Basics</h1>
        </header>
        <p className="App-intro">
          Redux with ReactJS
        </p>
        <ReduxBasics />
      </div>
    );
  }
}

export default App;
