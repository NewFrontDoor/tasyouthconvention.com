import thunkMiddleware from 'redux-thunk';
//import loggerMiddleware from 'redux-logger';

import rootReducer from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState) => {
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        //loggerMiddleware
      )
    ),
    initialState
  );
};
