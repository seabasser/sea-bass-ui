import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <RecoilRoot><App /></RecoilRoot>
  </Router>, document.getElementById('root'));
