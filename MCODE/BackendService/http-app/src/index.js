import React from 'react';
import ReactDOM from 'react-dom';
import loger from './services/logService';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
loger.init();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
