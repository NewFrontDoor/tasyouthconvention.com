import * as types from '../actions/action-types';
import { getCurrentLeaderPrice } from './event-details';

export const ROADSHOW_SOUTH_GROUP_REGISTRATION_STATE_KEY = 'roadshowSouthGroupRegistration';



const initialState = {
  stage: 'registration',
  details: {},
  paymentDetails: {}
};

export default (state, action) => {
  switch (action.type) {
    case types.SAVING_ROADSHOW_SOUTH_GROUP_REGISTRATION:
      return Object.assign({}, state, { stage: 'savingRegistration' });
    case types.SAVED_ROADSHOW_SOUTH_GROUP_REGISTRATION:
      return Object.assign({}, state, { stage: 'payment', details: action.details, registrationSaved: true });
    case types.ERROR_SAVING_ROADSHOW_SOUTH_GROUP_REGISTRATION:
      return Object.assign({}, state, { stage: 'error', errorDetails: action.problem });
    case types.SAVING_ROADSHOW_SOUTH_LEADER_PAYMENT_DETAILS:
      return Object.assign({}, state, { stage: 'savingPayment' });
    case types.ERROR_SAVING_ROADSHOW_SOUTH_LEADER_PAYMENT_DETAILS:
      return Object.assign({}, state, { state: 'error', errorDetails: action.problem });
    case types.SAVED_ROADSHOW_SOUTH_LEADER_PAYMENT_DETAILS:
      return Object.assign({}, state, { stage: 'finished', paymentDetails: action.details });
    case types.RESET_ROADSHOW_SOUTH_GROUP_REGISTRATION:
      return initialState;
    default:
      return state || initialState;
  }
}

export const getAmountOwing = (state) => {
  if (state[ROADSHOW_SOUTH_GROUP_REGISTRATION_STATE_KEY].details.uuid === undefined) {
    return null;
  }
  return getCurrentLeaderPrice(state);
};
