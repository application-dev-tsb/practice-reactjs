import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeComponent from './components/WelcomeComponent';
import Clock from './components/Clock';
import Counter from './components/Counter';
import TapCounter from './components/TapCounter';

class App extends React.Component {

  render() {
      return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
              <Clock/>
              <Counter startCount="1" delaySeconds="10"/>
              <Counter startCount="100" delaySeconds="30"/>
              <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reloads.
            </p>
              <li>
                  <WelcomeComponent message="Test 1"/>
                  <WelcomeComponent message="Test 2"/>
                  <WelcomeComponent message="Test 3"/>
              </li>

              <div>
                  <TapCounter/>
              </div>
          </div>
    );
  }
}

export default App;
