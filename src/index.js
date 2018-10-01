import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

import { Router, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import history from './history';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Router history={history}>
      <App />
    </Router>
    </BrowserRouter>
  </Provider>,
  
  document.getElementById('root')
);
registerServiceWorker();
