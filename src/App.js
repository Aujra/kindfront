import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function menu() {
    return "test";
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <menu />
      </div>
    );
  }
}

export default App;
