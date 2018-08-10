import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

Raven.config('https://2a62cb24c5734a33b1b63c3235d26abf@sentry.io/1259844', {
  release: '0-0-0',
  environment: 'development-test',
}).install();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
