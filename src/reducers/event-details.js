import * as types from '../actions/action-types';

const initialState = {
  loading: false,
  details: {}
}

export default (state, action) => {
  switch (action.type) {
    case types.REQUESTING_LATEST_EVENT_DETAILS:
      return Object.assign({}, state, { loading: true });
    case types.RECEIVED_LATEST_EVENT_DETAILS:
      return Object.assign({}, state, { loading: false, details: action.details });
    default:
      return state || initialState;
  }
}
