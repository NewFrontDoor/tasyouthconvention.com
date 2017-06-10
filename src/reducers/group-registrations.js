import * as types from '../actions/action-types';

export const GROUP_REGISTRATION_STATE_KEY = 'groupRegistrations';

const initialState = {
  saving: false,
  details: {},
  error: false,
  errorDetails: null
};

export default (state, action) => {
  switch (action.type) {
    case types.SAVING_GROUP_REGISTRATION:
      return Object.assign({}, state, { saving: true });
    case types.SAVED_GROUP_REGISTRATION:
      return Object.assign({}, state, { saving: false, details: action.details });
    case types.ERROR_SAVING_GROUP_REGISTRATION:
      return Object.assign({}, state, { saving: false, error: true, errorDetails: action.problem});
    default:
      return state || initialState;
  }
}
