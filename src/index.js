import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css'

import App from './App';
import {StateContextProvider} from './context/StateContextProvider'


ReactDom.render(
    <StateContextProvider>
    <Router>
      <App />
    </Router>
    </StateContextProvider>,
  document.getElementById('root'),
);