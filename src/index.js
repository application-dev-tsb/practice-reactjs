import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

/**
 * Rendering elements
 * https://facebook.github.io/react/docs/rendering-elements.html
 */
function renderApp() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

renderApp();
setInterval(renderApp, 1000);