import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';

export default (initialState) => {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
    initialState
  );
};
