import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './hoc/App';
import registerServiceWorker from './registerServiceWorker';
import { CookiesProvider } from 'react-cookie';
// import './index.css';

// import 'jquery';
// import 'popper.js';
import 'bootstrap';
import store from './store';
import 'bootstrap/scss/bootstrap.scss';

import './sass/index.css';
import fontAwesome from './helpers/fontAwesome.config';
import { isExistsToken } from './helpers';

fontAwesome();
isExistsToken();
ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
