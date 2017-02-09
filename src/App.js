import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeComponent from './components/WelcomeComponent'

class App extends Component {

  render() {
      let time = new Date().toLocaleTimeString();

      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div>The Time is {time}</div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reloads.
        </p>

          <li>
              <WelcomeComponent message="Test 1"/>
              <WelcomeComponent message="Test 2"/>
              <WelcomeComponent message="Test 3"/>
          </li>
      </div>
    );
  }
}

export default App;
