import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import WelcomeComponent from './components/WelcomeComponent'
import './index.css';

/**
 * Rendering elements
 * https://facebook.github.io/react/docs/rendering-elements.html
 */
ReactDOM.render(
    <WelcomeComponent message="Test"/>,
    document.getElementById('root')
);
