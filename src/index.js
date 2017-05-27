import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';

import { loadBasicContent } from './actions/content-actions';

const store = configureStore();

store.dispatch(loadBasicContent());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
