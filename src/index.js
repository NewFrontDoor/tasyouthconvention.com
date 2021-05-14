import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';

import {Provider} from 'react-redux';
import configureStore from './store/configure-store';

import 'bootstrap/dist/css/bootstrap.css';

import { loadBasicContent } from './actions/content-actions';
import { getLatestEventDetails } from './actions/event-details';
import { getYouthTrainingDetails } from './actions/youth-training-event-details'

const store = configureStore();

store.dispatch(getLatestEventDetails());
store.dispatch(getYouthTrainingDetails());

store.dispatch(loadBasicContent());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  , document.getElementById('root'));
