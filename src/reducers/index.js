import content from './content-reducer.js';
import page from './page-context.js';
import eventDetails from './event-details.js';

import { reducer as form } from 'redux-form';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  content,
  page,
  form,
  eventDetails
});

export default rootReducer;
