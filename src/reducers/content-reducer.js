import * as types from '../actions/action-types';
import { keyBy } from 'lodash';

const initialState = {
  loading: false,
  content: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUESTING_CONTENT:
      return Object.assign({}, state, { loading: true, content: {}});
    case types.RECEIVED_CONTENT:
      return Object.assign({}, state, { loading: false, content: keyBy(action.content, (c) => c.path) });
    default:
      return state;
  }
};
