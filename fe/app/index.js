import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.js';
import './index.css'

const rootElement = document.getElementById('container');    
ReactDOM.render(<Container />, rootElement);

if (module.hot) {
    module.hot.accept();
  }