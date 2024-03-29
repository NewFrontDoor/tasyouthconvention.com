import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';

import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

import 'bootstrap/dist/css/bootstrap.css';

import { loadBasicContent } from './actions/content-actions';
import { getLatestEventDetails } from './actions/event-details';
import { getYouthTrainingDetails } from './actions/youth-training-event-details'
import { getRoadshowNorthDetails } from './actions/roadshow-north-event-details'
import { getRoadshowSouthDetails } from './actions/roadshow-south-event-details'

const store = configureStore();

store.dispatch(getLatestEventDetails());
store.dispatch(getYouthTrainingDetails());
store.dispatch(getRoadshowNorthDetails());
store.dispatch(getRoadshowSouthDetails());

store.dispatch(loadBasicContent());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  , document.getElementById('root'));
