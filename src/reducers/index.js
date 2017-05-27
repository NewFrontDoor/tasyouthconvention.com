import people from './people-reducer.js';
import content from './content-reducer.js';
import page from './page-context.js';
import { reducer as form } from 'redux-form';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people,
  content,
  page,
  form
});

export default rootReducer;
