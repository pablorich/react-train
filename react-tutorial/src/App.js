import React, { Component } from 'react';
import './App.css';
import Price from './Price/Price'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my swamp</h1>
          <p>Hola en español</p>
          <Price price="100.50" />
        </header>
      </div>
    );
  }
}

export default App;