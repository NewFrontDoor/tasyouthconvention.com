import * as types from '../actions/action-types';

const initialState = {
  hideSidebar: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return Object.assign({}, state, { hideSidebar: !state.hideSidebar});
    default:
      return state;
  }
}
