import * as types from '../actions/action-types';
import moment from 'moment';

const initialState = {
  loading: true,
  details: {},
  registeredGroups: []
}

const normaliseEventDetails = (event) => ({
  ...event,
  fromDate: moment(event.field_from_date),
  toDate: moment(event.field_to_date),
  registrationStartDate: moment('2017-06-09T00:00:00'/*event.field_registration_open_date*/),
  registrationCloseDate: moment(event.field_registration_close_date),
  earlyBirdCutoffDate: moment(event.field_early_bird_cutoff),
  earlyBirdLeaderPrice: parseFloat(event.field_early_bird_leader_price),
  earlyBirdPrice: parseFloat(event.field_early_bird_price),
  standardPrice: parseFloat(event.field_standard_price),
  standardLeaderPrice: parseFloat(event.field_standard_leader_price)
})

export default (state, action) => {
  switch (action.type) {
    case types.REQUESTING_LATEST_EVENT_DETAILS:
      return Object.assign({}, state, { loading: true });
    case types.RECEIVED_LATEST_EVENT_DETAILS:
      return Object.assign({}, state, { loading: false, details: normaliseEventDetails(action.details) });
    case types.RECEIVED_GROUP_INFORMATION:
      return Object.assign({}, state, { registeredGroups: action.groups });
    default:
      return state || initialState;
  }
}

export const areRegistrationsOpen = (state) => {
  const eventDetails = state.eventDetails.details;
  if (eventDetails.registrationStartDate !== undefined && eventDetails.registrationCloseDate !== undefined) {
    return moment().isSameOrAfter(eventDetails.registrationStartDate) && moment().isSameOrBefore(eventDetails.registrationCloseDate);
  }
  return false;
}

const getPrice = (state, earlyBirdKey, standardKey) => {
  if (areRegistrationsOpen(state)) {
    const eventDetails = state.eventDetails.details;
    if (earlyBirdApplies(state)) {
      return eventDetails[earlyBirdKey];
    }
    return eventDetails[standardKey];
  }
  return null;
}

export const earlyBirdApplies = (state) => {
  const eventDetails = state.eventDetails.details;
  return areRegistrationsOpen(state) && eventDetails.earlyBirdCutoffDate !== undefined && moment().isSameOrBefore(eventDetails.earlyBirdCutoffDate);
}

export const getCurrentLeaderPrice = (state) => {
  return getPrice(state, 'earlyBirdLeaderPrice', 'standardLeaderPrice');
}

export const getCurrentPrice = (state) => {
  return getPrice(state, 'earlyBirdPrice', 'standardPrice');
}

export const getGroups = (state) => state.eventDetails.registeredGroups;
