import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import configureStore from './store/configure-store';

import 'bootstrap/dist/css/bootstrap.css';

import { loadBasicContent } from './actions/content-actions';

const store = configureStore();

store.dispatch(loadBasicContent());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
